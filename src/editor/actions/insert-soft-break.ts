import { Editor } from 'slate'
import { ActionCallback } from '../lib/action-controller/types'

export const insertSoftBreak: ActionCallback<Editor> = (editor, event) => {
  const { selection } = editor
  if (!selection) return

  event.preventDefault()
  editor.insertText('\n')
}
