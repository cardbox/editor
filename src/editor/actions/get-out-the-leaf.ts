import { Editor } from 'slate'
import { ActionCallback } from '../lib/action-controller/types'

/*
 * Bound to right arrow key
 *
 * 1. When the selection is not at the end of a marked leaf
 *    - skip
 * 2. Insert a new leaf after the current
 * 3. It should have ' ' text
 * 4. Move the selection to the end of the new leaf
 */
export const getOutTheLeaf: ActionCallback<Editor> = (_editor, _event) => {
  // TODO: implement getOutTheLeaf
}
