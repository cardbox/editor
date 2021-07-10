import { ActionCallback } from '../lib/action-controller/types'
import { GlobalTransforms } from '../lib/global-transforms'
import { ActionParams } from './types'

export const makeItalic: ActionCallback<ActionParams> = ({ editor, event }) => {
  event.preventDefault()
  GlobalTransforms.toggleModification(editor, 'italic')
}
