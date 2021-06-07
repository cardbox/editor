import { CustomTransforms } from '../common/custom-transforms'
import { ActionCallback } from '../lib/action-controller/types'
import { ActionParams } from './types'

export const insertExitBreak: ActionCallback<ActionParams> = ({
  editor,
  event,
}) => {
  event.preventDefault()
  CustomTransforms.insertExitBreak(editor)
}
