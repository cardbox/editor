import { Editor } from 'slate'
import { ActionCallback } from '../lib/action-controller/types'

export const handler: ActionCallback<Editor> = (editor, event) => {
  /*
   * TODO: Implement insert-exit-break action
   * It bound to 'enter' key
   *
   * 1. The action always deletes the selected text
   * 2. When selection is on the block start
   *    - insert a new default block before the current
   *    - the focus should be in the same place as it was
   * 3. When selection is on the block end
   *    - insert a new default block after the current
   *    - move the focus there
   * 4. When selection is on the block middle
   *    - insert a new block with the same type as the current has
   *    - move the contents from the right side into this block
   *    - move the focus at the start of the new block
   */

  const { selection } = editor
  if (!selection) return

  event.preventDefault()
}
