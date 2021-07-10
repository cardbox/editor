import { ActionParams } from '../actions-registry/types'
import { ActionCallback } from '../lib/action-controller/types'

export const indent: ActionCallback<ActionParams> = ({ event }) => {
  event.preventDefault()
}
