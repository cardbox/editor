import { Editor } from 'slate'
import { toggleLeafProperty } from '../common/transforms'
import { ActionCallback } from '../lib/action-controller/types'

export const makeBold: ActionCallback<Editor> = (editor, event) => {
  event.preventDefault()
  toggleLeafProperty(editor, 'bold')
}
