import { Editor } from 'slate'
import { Action, ActionCallback, ActionEvent } from './types'

export function createActionController() {
  type Callback = ActionCallback<Editor>

  const actions = new Map<Action, Callback>()

  const register = (action: Action, callback: Callback) => {
    actions.set(action, callback)
  }

  const execute = (action: Action, context: Editor, event: ActionEvent) => {
    const callback = actions.get(action)
    if (!callback) return
    callback(context, event)
  }

  const carryExecute =
    (action: Action) => (context: Editor, event: ActionEvent) => {
      execute(action, context, event)
    }

  return {
    register,
    execute,
    carryExecute,
  }
}
