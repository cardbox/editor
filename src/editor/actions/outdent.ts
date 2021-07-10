import { ActionParams } from '../actions-registry'
import { ActionCallback } from '../lib/action-controller/types'

export const outdent: ActionCallback<ActionParams> = ({ event }) => {
  event.preventDefault()
}
