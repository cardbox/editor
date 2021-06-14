import { GlobalTransforms } from '../lib/global-transforms'
import { ActionCallback } from '../lib/action-controller/types'
import { ActionParams } from './types'

export const getOutTheLeaf: ActionCallback<ActionParams> = ({
  editor,
  event,
}) => {
  const { success } = GlobalTransforms.getOutTheLeaf(editor)
  if (success) event.preventDefault()
}
