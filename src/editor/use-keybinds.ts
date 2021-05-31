import { useCallback, useEffect } from 'react'
import { Editor } from 'slate'
import { actionController } from './actions'
import { keybindController } from './keybinds'
import {
  Action,
  ActionKeybinds,
  CustomActionKeybinds,
  DefaultActionKeybinds,
} from './lib/action-controller/types'

const defaultKeybinds: DefaultActionKeybinds = {
  'insert-soft-break': 'shift+enter',
  'insert-exit-break': ['enter', 'mod+enter'],
  'make-bold': 'mod+b',
  'make-italic': 'mod+i',
  'make-underlined': 'mod+u',
  'make-inline-code': ['mod+e', 'mod+`'],
}

export function useKeybinds(
  editor: Editor,
  customKeybinds: CustomActionKeybinds
) {
  useEffect(() => {
    const finalKeybinds: ActionKeybinds = {
      ...defaultKeybinds,
      ...customKeybinds,
    }

    keybindController.unregisterAll()
    Object.entries<ActionKeybinds[Action]>(finalKeybinds).forEach(
      ([action, keybind]) => {
        if (!keybind) return
        const keys = typeof keybind === 'string' ? [keybind] : keybind

        for (const key of keys) {
          keybindController.register(
            key,
            actionController.curryExecute(action as Action)
          )
        }
      }
    )
  }, [customKeybinds])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      keybindController.keyDown(event, editor)
    },
    [editor]
  )

  return { handleKeyDown }
}
