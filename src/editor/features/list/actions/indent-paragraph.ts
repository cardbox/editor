import { ActionParams } from '../../../actions-registry'
import { ActionCallback } from '../../../lib/action-controller/types'
import { LocalTransforms } from '../transforms'

export const indentParagraph: ActionCallback<ActionParams> = ({
  editor,
  event,
}) => {
  event.preventDefault()
  LocalTransforms.indentParagraph(editor)
}
