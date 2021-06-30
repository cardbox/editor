import { ActionParams } from '../../../actions'
import { ActionCallback } from '../../../lib/action-controller/types'

export const indent: ActionCallback<ActionParams> = ({ event, editor }) => {
  event.preventDefault()
  editor.insertText('  ')
}
