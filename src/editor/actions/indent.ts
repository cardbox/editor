import { ActionParams } from '../actions-registry'
import { ActionCallback } from '../lib/action-controller/types'

export const indent: ActionCallback<ActionParams> = ({ event }) => {
  event.preventDefault()
}
