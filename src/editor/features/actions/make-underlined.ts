import { CustomTransforms } from '../../lib/custom-transforms'
import { ActionCallback } from '../../lib/action-controller/types'
import { ActionParams } from './types'

export const makeUnderlined: ActionCallback<ActionParams> = ({
  editor,
  event,
}) => {
  event.preventDefault()
  CustomTransforms.toggleModification(editor, 'underlined')
}
