import { ActionParams } from '../../../actions'
import { ActionCallback } from '../../../lib/action-controller/types'
import { LocalTransforms } from '../transforms'

export const outdent: ActionCallback<ActionParams> = ({ editor, event }) => {
  event.preventDefault()
  LocalTransforms.outdent(editor)
}