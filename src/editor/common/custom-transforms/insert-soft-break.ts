import { Editor } from 'slate'

export const insertSoftBreak = (editor: Editor) => {
  if (!editor.selection) return
  editor.insertText('\n')
}
