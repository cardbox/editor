import { Editor } from 'slate'
import { ActionCallback } from '../lib/action-controller/types'

export const handler: ActionCallback<Editor> = (editor, event) => {
  event.preventDefault()

  /*
   * TODO: Implement place-break action
   * It always bound to 'enter' key
   * It used to start a new line with the default block
   */
}
