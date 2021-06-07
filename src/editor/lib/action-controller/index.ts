import { Action, ActionBaseParams, ActionCallback } from './types'

export function createActionController<
  TParams extends ActionBaseParams = ActionBaseParams
>() {
  type Callback = ActionCallback<TParams>

  const actions = new Map<Action, Callback>()

  const register = (action: Action, callback: Callback) => {
    actions.set(action, callback)
  }

  const execute = (action: Action, params: TParams) => {
    const callback = actions.get(action)
    if (!callback) return
    callback(params)
  }

  const curryExecute = (action: Action) => (params: TParams) => {
    execute(action, params)
  }

  return {
    register,
    execute,
    curryExecute,
  }
}
