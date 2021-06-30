import { ActionParams } from '../../../actions'
import { ActionCallback } from '../../../lib/action-controller/types'
import { LocalTransforms } from '../transforms'

export const indent: ActionCallback<ActionParams> = ({ event, editor }) => {
  event.preventDefault()
  LocalTransforms.indent(editor)
}
