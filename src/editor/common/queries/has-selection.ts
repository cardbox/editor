import { Editor, Range } from 'slate'

export function hasSelection(editor: Editor): boolean {
  if (!editor.selection) {
    return false
  }

  return Range.isExpanded(editor.selection)
}
