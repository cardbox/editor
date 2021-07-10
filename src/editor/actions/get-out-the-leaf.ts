import { ActionParams } from '../actions-registry/types'
import { ActionCallback } from '../lib/action-controller/types'
import { GlobalTransforms } from '../lib/global-transforms'

export const getOutTheLeaf: ActionCallback<ActionParams> = ({
  editor,
  event,
}) => {
  const { success } = GlobalTransforms.getOutTheLeaf(editor)
  if (success) event.preventDefault()
}
