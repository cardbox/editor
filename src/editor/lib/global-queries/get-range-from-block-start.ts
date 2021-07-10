import { getAbove } from './get-above'
import { getPointFromLocation } from './get-point-from-location'
import { Editor, Range } from 'slate'

export function getRangeFromBlockStart(editor: Editor): Range | undefined {
  if (!editor.selection) return

  const blockEntry = getAbove(editor, { type: 'block' })
  if (!blockEntry) return

  const [, blockPath] = blockEntry
  const start = Editor.start(editor, blockPath)
  const end = getPointFromLocation(editor.selection)
  if (!end) return

  return {
    anchor: start,
    focus: end,
  }
}
