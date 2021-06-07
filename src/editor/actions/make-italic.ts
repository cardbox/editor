import { CustomTransforms } from '../common/custom-transforms'
import { ActionCallback } from '../lib/action-controller/types'
import { ActionParams } from './types'

export const makeItalic: ActionCallback<ActionParams> = ({ editor, event }) => {
  event.preventDefault()
  CustomTransforms.toggleModification(editor, 'italic')
}
