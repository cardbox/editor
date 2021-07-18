import { ActionCallback } from '../../../lib/action-controller/types'
import { ActionParams } from '../../../registries/actions'
import { LocalTransforms } from '../transforms'

export const outdent: ActionCallback<ActionParams> = ({ editor, event }) => {
  event.preventDefault()
  LocalTransforms.outdent(editor)
}
