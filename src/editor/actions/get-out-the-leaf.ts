import { Editor, Point, Range, Transforms } from 'slate'
import { Queries } from '../common/queries'
import { createLeaf, LEAF_MODIFICATIONS } from '../leaf'
import { ActionCallback } from '../lib/action-controller/types'

/*
 * Bound to right arrow key
 *
 * 1. When the selection is not at the end of the current block
 *    - skip
 * 2. When the current leaf has no modifications
 *    - skip
 * 3. After the current leaf insert a new one with text ' '
 * 4. Move the selection to the end of the new leaf
 */
export const getOutTheLeaf: ActionCallback<Editor> = (editor, _event) => {
  if (!editor.selection) return
  if (Range.isExpanded(editor.selection)) return

  const blockEntry = Queries.getAbove(editor, {
    type: 'block',
    mode: 'lowest',
  })
  if (!blockEntry) return

  const leafEntry = Queries.getAbove(editor, {
    type: 'leaf',
    mode: 'lowest',
  })
  if (!leafEntry) return

  const [, blockPath] = blockEntry
  const [leaf] = leafEntry

  const blockEnd = Editor.end(editor, blockPath)
  const selectionPoint = Range.start(editor.selection)

  const isBlockEnd = Point.equals(selectionPoint, blockEnd)

  if (!isBlockEnd) {
    return
  }

  const hasModifications = LEAF_MODIFICATIONS.some((modification) => {
    return Boolean(leaf[modification])
  })

  if (!hasModifications) {
    return
  }

  Transforms.insertNodes(editor, createLeaf(' '), {
    select: true,
  })
}
