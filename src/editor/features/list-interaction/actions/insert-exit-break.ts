import { ActionParams } from '../../../actions'
import { ActionCallback } from '../../../lib/action-controller/types'
import { CustomTransforms } from '../../../lib/custom-transforms'

export const insertExitBreak: ActionCallback<ActionParams> = ({
  editor,
  event,
}) => {
  event.preventDefault()
  CustomTransforms.insertExitBreak(editor)
}
