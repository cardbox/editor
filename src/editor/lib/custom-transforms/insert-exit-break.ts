import { Editor, Path, Point, Range, Transforms } from 'slate'
import { createDefaultElement } from '../../entities/elements'
import { EditorQueries } from '../editor-queries'

/*
 * 1. The action always deletes the selected text
 *
 * 2. When the selection is on the block end
 *    - insert a new default block after the current
 *    - move the focus there
 *    (the priority is higher since we need to move
 *     the selection to the new block's start)
 *
 * 3. When the selection is on the block start
 *    - insert a new default block before the current
 *    - keep the selection at the start of moved block
 *
 * 4. When the selection is on the block middle
 *    - insert a new block with the same type as the current has
 *    - move the contents from the right side into this block
 *    - move the selection at the start of the new block
 */
export function insertExitBreak(editor: Editor) {
  if (!editor.selection) return

  if (Range.isExpanded(editor.selection)) {
    // 1. Delete the selected text
    Transforms.delete(editor, { at: editor.selection })
  }

  const blockEntry = EditorQueries.getAbove(editor, {
    type: 'block',
    mode: 'highest',
  })
  if (!blockEntry) return

  const [, blockPath] = blockEntry
  const [blockStart, blockEnd] = Editor.edges(editor, blockPath)

  const selectionPoint = EditorQueries.getPointFromLocation(editor.selection)
  if (!selectionPoint) return

  // 2. The selection is on the block end
  if (Point.equals(selectionPoint, blockEnd)) {
    Transforms.insertNodes(editor, createDefaultElement(), { select: true })
    return
  }

  // 3. The selection is on the block start
  if (Point.equals(selectionPoint, blockStart)) {
    Transforms.insertNodes(editor, createDefaultElement(), { select: false })
    Transforms.select(editor, {
      path: Path.next(blockPath).concat(0),
      offset: 0,
    })
    return
  }

  // 4. The selection is on the block middle
  Transforms.splitNodes(editor, {
    mode: 'highest',
  })
}
