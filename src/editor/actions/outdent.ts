import { ActionCallback } from '../lib/action-controller/types'
import { ActionParams } from '../registries/actions'

export const outdent: ActionCallback<ActionParams> = ({ event }) => {
  event.preventDefault()
}
