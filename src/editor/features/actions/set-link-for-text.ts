import { ActionCallback } from '../../lib/action-controller/types'
import { ActionParams } from './types'

export const setLinkForText: ActionCallback<ActionParams> = ({ event }) => {
  event.preventDefault()
  // TODO: open popup
}
