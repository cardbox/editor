import { ActionParams } from '../../../actions-registry'
import { ActionCallback } from '../../../lib/action-controller/types'
import { LocalTransforms } from '../transforms'

export const deleteBackward: ActionCallback<ActionParams> = ({
  editor,
  event,
}) => {
  const { handled } = LocalTransforms.deleteBackward(editor)

  if (handled) event.preventDefault()
  else return { skipped: true }
}
