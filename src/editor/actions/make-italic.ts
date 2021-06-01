import { Editor } from 'slate'
import { toggleLeafModification } from '../common/transforms'
import { ActionCallback } from '../lib/action-controller/types'

export const makeItalic: ActionCallback<Editor> = (editor, event) => {
  event.preventDefault()
  toggleLeafModification(editor, 'italic')
}
