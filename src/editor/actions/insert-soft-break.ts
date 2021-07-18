import { ActionCallback } from '../lib/action-controller/types'
import { GlobalTransforms } from '../lib/global-transforms'
import { ActionParams } from '../registries/actions'

export const insertSoftBreak: ActionCallback<ActionParams> = ({
  editor,
  event,
}) => {
  event.preventDefault()
  GlobalTransforms.insertSoftBreak(editor)
}
