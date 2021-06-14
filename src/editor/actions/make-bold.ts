import { GlobalTransforms } from '../lib/global-transforms'
import { ActionCallback } from '../lib/action-controller/types'
import { ActionParams } from './types'

export const makeBold: ActionCallback<ActionParams> = ({ editor, event }) => {
  event.preventDefault()
  GlobalTransforms.toggleModification(editor, 'bold')
}
