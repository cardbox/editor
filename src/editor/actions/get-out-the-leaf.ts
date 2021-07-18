import { ActionCallback } from '../lib/action-controller/types'
import { GlobalTransforms } from '../lib/global-transforms'
import { ActionParams } from '../registries/actions'

export const getOutTheLeaf: ActionCallback<ActionParams> = ({
  editor,
  event,
}) => {
  const { success } = GlobalTransforms.getOutTheLeaf(editor)
  if (success) event.preventDefault()
}
