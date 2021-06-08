import { Editor, Point, Range, Transforms } from 'slate'
import { createLeaf } from '../../entities/leaf'
import { EditorQueries } from '../editor-queries'

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

  const blockEntry = EditorQueries.getAbove(editor, {
    type: 'block',
    mode: 'lowest',
  })

  if (!blockEntry) {
    return failure()
  }

  const leafEntry = EditorQueries.getAbove(editor, {
    type: 'leaf',
    mode: 'lowest',
  })

  if (!leafEntry) {
    return failure()
  }

  const [, blockPath] = blockEntry
  const [leaf] = leafEntry

  const blockEnd = Editor.end(editor, blockPath)
  const selectionPoint = Range.start(editor.selection)

  const isBlockEnd = Point.equals(selectionPoint, blockEnd)

  if (!isBlockEnd) {
    return failure()
  }

  const hasModifications = EditorQueries.leafHasModifications(leaf)

  if (!hasModifications) {
    return failure()
  }

  Transforms.insertNodes(editor, createLeaf({ text: ' ' }), {
    select: true,
  })

  return success()
}
