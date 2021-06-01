import { Editor } from 'slate'
import { toggleLeafModification } from '../common/transforms'
import { ActionCallback } from '../lib/action-controller/types'

export const makeInlineCode: ActionCallback<Editor> = (editor, event) => {
  event.preventDefault()
  toggleLeafModification(editor, 'inlineCode')
}
