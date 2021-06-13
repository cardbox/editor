import { ActionBaseParams, ListenerConfig } from './types'

export function createActionController<
  TAction extends string = string,
  TParams extends ActionBaseParams = ActionBaseParams
>() {
  type LocalListenerConfig = ListenerConfig<TParams>
  const listeners: LocalListenerConfig[] = []

  const register = (
    action: TAction,
    callback: LocalListenerConfig['callback']
  ) => {
    listeners.push({
      action,
      priority: 1,
      callback,
      match: () => true,
    })
  }

  const override = (
    action: TAction,
    callback: LocalListenerConfig['callback'],
    {
      match = () => true,
      priority = 2,
    }: {
      match?: LocalListenerConfig['match']
      priority?: LocalListenerConfig['priority']
    } = {}
  ) => {
    listeners.push({
      action,
      priority,
      callback,
      match,
    })
  }

  const execute = (action: TAction, params: TParams) => {
    const configs = listeners.filter((config) => config.action === action)
    const sortedByPriority = configs.sort((a, b) => b.priority - a.priority)

    let matchedConfig: LocalListenerConfig | null = null
    for (const config of sortedByPriority) {
      if (config.match(params)) {
        matchedConfig = config
        break
      }
    }

    if (!matchedConfig) return
    matchedConfig.callback(params)
  }

  const curryExecute = (action: TAction) => (params: TParams) => {
    execute(action, params)
  }

  return {
    register,
    override,
    execute,
    curryExecute,
  }
}
