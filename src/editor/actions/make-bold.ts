import { Editor } from 'slate'
import { toggleLeafModification } from '../common/transforms'
import { ActionCallback } from '../lib/action-controller/types'

export const makeBold: ActionCallback<Editor> = (editor, event) => {
  event.preventDefault()
  toggleLeafModification(editor, 'bold')
}
