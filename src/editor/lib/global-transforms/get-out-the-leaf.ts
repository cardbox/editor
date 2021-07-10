import { GlobalQueries } from '../global-queries'
import { Editor, Path, Point, Range, Transforms } from 'slate'

interface TransformResult {
  success: boolean
}

const success = (): TransformResult => ({ success: true })
const failure = (): TransformResult => ({ success: false })

/*
 * 1. When the selection is not at the end of the current block
 *    - skip
 * 2. When the current leaf has no modifications
 *    - skip
 * 3. After the current leaf insert a new one with text ' '
 * 4. Move the selection to the end of the new leaf
 */
export function getOutTheLeaf(editor: Editor): TransformResult {
  if (!editor.selection) {
    return failure()
  }

  if (Range.isExpanded(editor.selection)) {
    return failure()
  }

  const blockEntry = GlobalQueries.getAbove(editor, {
    type: 'block',
    mode: 'lowest',
  })

  if (!blockEntry) {
    return failure()
  }

  const leafEntry = GlobalQueries.getAbove(editor, {
    type: 'leaf',
  })

  if (!leafEntry) {
    return failure()
  }

  const [, blockPath] = blockEntry
  const [leaf, leafPath] = leafEntry

  const blockEnd = Editor.end(editor, blockPath)
  const selectionPoint = Range.start(editor.selection)

  const isAllowedPlace = () => {
    const isBlockEnd = Point.equals(selectionPoint, blockEnd)
    return isBlockEnd
  }

  if (!isAllowedPlace()) {
    return failure()
  }

  const hasModifications = GlobalQueries.leafHasTextModifications(leaf)

  if (!hasModifications) {
    return failure()
  }

  Transforms.insertNodes(editor, { text: ' ' }, { select: false })
  Transforms.select(editor, Path.next(leafPath))

  return success()
}
