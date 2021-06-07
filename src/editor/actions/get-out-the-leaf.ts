import { CustomTransforms } from '../common/custom-transforms'
import { ActionCallback } from '../lib/action-controller/types'
import { ActionParams } from './types'

export const getOutTheLeaf: ActionCallback<ActionParams> = ({
  editor,
  event,
}) => {
  const { success } = CustomTransforms.getOutTheLeaf(editor)
  if (success) event.preventDefault()
}
