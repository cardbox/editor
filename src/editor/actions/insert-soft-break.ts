import { ActionParams } from '../actions-registry/types'
import { ActionCallback } from '../lib/action-controller/types'
import { GlobalTransforms } from '../lib/global-transforms'

export const insertSoftBreak: ActionCallback<ActionParams> = ({
  editor,
  event,
}) => {
  event.preventDefault()
  GlobalTransforms.insertSoftBreak(editor)
}
