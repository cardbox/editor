import { useCallback, useEffect } from 'react'
import {
  Action,
  ActionKeybinds,
  actions,
  CustomActionKeybinds,
  DefaultActionKeybinds,
} from '../../features/actions'
import { keybinds } from '../../features/keybinds'
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
  'set-link-for-text': 'mod+k',
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
    keybinds.unregisterAll()

    type Entries = Array<[Action, ActionKeybinds[Action]]>
    const entries = Object.entries(finalKeybinds) as Entries

    entries.forEach(([action, keybind]) => {
      if (!keybind) return
      const keys = typeof keybind === 'string' ? [keybind] : keybind

      for (const key of keys) {
        keybinds.register(key, (editor, event) => {
          actions.execute(action, {
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
      keybinds.keyDown(event, editor)
    },
    [editor]
  )

  return { handleKeyDown }
}
