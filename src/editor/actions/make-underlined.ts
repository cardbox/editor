import { ActionCallback } from '../lib/action-controller/types'
import { GlobalTransforms } from '../lib/global-transforms'
import { ActionParams } from '../registries/actions'

export const makeUnderlined: ActionCallback<ActionParams> = ({
  editor,
  event,
}) => {
  event.preventDefault()
  GlobalTransforms.toggleTextModification(editor, 'underlined')
}
