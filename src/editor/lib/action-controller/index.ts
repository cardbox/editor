import { ActionBaseParams, ActionCallback } from './types'

export function createActionController<
  TAction extends string = string,
  TParams extends ActionBaseParams = ActionBaseParams
>() {
  type Callback = ActionCallback<TParams>

  const actions = new Map<TAction, Callback>()

  const register = (action: TAction, callback: Callback) => {
    actions.set(action, callback)
  }

  const execute = (action: TAction, params: TParams) => {
    const callback = actions.get(action)
    if (!callback) return
    callback(params)
  }

  const curryExecute = (action: TAction) => (params: TParams) => {
    execute(action, params)
  }

  return {
    register,
    execute,
    curryExecute,
  }
}
