import { ActionParams } from '../../../actions-registry'
import { ActionCallback } from '../../../lib/action-controller/types'
import { LocalTransforms } from '../transforms'

export const insertExitBreak: ActionCallback<ActionParams> = ({
  editor,
  event,
}) => {
  event.preventDefault()
  LocalTransforms.insertExitBreak(editor)
}
