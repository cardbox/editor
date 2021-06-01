import { Editor } from 'slate'
import { toggleLeafProperty } from '../common/transforms'
import { ActionCallback } from '../lib/action-controller/types'

export const makeInlineCode: ActionCallback<Editor> = (editor, event) => {
  event.preventDefault()
  toggleLeafProperty(editor, 'inlineCode')
}
