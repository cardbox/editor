import { ActionCallback } from '../../../lib/action-controller/types'
import { ActionParams } from '../../../registries/actions'
import { LocalTransforms } from '../transforms'

export const outdent: ActionCallback<ActionParams> = ({ event, editor }) => {
  event.preventDefault()
  LocalTransforms.outdent(editor)
}
