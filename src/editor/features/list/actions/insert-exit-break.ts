import { ActionCallback } from '../../../lib/action-controller/types'
import { ActionParams } from '../../../registries/actions'
import { LocalTransforms } from '../transforms'

export const insertExitBreak: ActionCallback<ActionParams> = ({
  editor,
  event,
}) => {
  const { handled } = LocalTransforms.insertExitBreak(editor)
  if (handled) event.preventDefault()
  else return { skipped: true }
}
