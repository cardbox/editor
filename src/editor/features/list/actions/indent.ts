import { ActionCallback } from '../../../lib/action-controller/types'
import { ActionParams } from '../../../registries/actions'
import { LocalTransforms } from '../transforms'

export const indent: ActionCallback<ActionParams> = ({ editor, event }) => {
  event.preventDefault()
  LocalTransforms.indent(editor)
}
