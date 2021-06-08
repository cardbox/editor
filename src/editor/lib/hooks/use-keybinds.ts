import { useCallback, useEffect } from 'react'
import { actionController } from '../../actions'
import { keybindController } from '../../keybinds'
import {
  Action,
  ActionKeybinds,
  CustomActionKeybinds,
  DefaultActionKeybinds,
} from '../action-controller/types'
import { useEditor } from './use-editor'
import { useUI } from './use-ui'

const defaultKeybinds: DefaultActionKeybinds = {
  'insert-soft-break': 'shift+enter',
  'insert-exit-break': ['enter', 'mod+enter'],
  'get-out-the-leaf': 'arrowright',
  'make-bold': 'mod+b',
  'make-italic': 'mod+i',
  'make-underlined': 'mod+u',
  'make-inline-code': ['mod+e', 'mod+`'],
}

export function useKeybinds(customKeybinds: CustomActionKeybinds) {
  const editor = useEditor()
  const ui = useUI()

  useEffect(() => {
    const finalKeybinds: ActionKeybinds = {
      ...defaultKeybinds,
      ...customKeybinds,
    }

    // clear possible previous keybinds
    keybindController.unregisterAll()

    type Entries = Array<[Action, ActionKeybinds[Action]]>
    const entries = Object.entries(finalKeybinds) as Entries

    entries.forEach(([action, keybind]) => {
      if (!keybind) return
      const keys = typeof keybind === 'string' ? [keybind] : keybind

      for (const key of keys) {
        keybindController.register(key, (editor, event) => {
          actionController.execute(action, {
            editor,
            event,
            ui,
          })
        })
      }
    })
  }, [customKeybinds])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      keybindController.keyDown(event, editor)
    },
    [editor]
  )

  return { handleKeyDown }
}
