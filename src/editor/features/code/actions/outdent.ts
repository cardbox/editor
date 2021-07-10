import { ActionParams } from '../../../actions-registry'
import { ActionCallback } from '../../../lib/action-controller/types'
import { LocalTransforms } from '../transforms'

export const outdent: ActionCallback<ActionParams> = ({ event, editor }) => {
  event.preventDefault()
  LocalTransforms.outdent(editor)
}
