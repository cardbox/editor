import { createActionController } from '../lib/action-controller'
import { Action, ActionParams } from './types'

export const ActionsRegistry = createActionController<Action, ActionParams>()
export * from './types'
