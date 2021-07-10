import {
  Action,
  ActionKeybinds,
  actions,
  CustomActionKeybinds,
  DefaultActionKeybinds,
} from './actions'
import { keybinds } from './features/keybinds'
import { useEditor } from './lib/hooks/slate'
import { useUI } from './lib/hooks/use-ui'
import { useCallback, useEffect } from 'react'

const defaultKeybinds: DefaultActionKeybinds = {
  'delete-backward': 'backspace',
  'insert-soft-break': 'shift+enter',
  'insert-exit-break': 'enter',
  'indent': 'tab',
  'outdent': 'shift+tab',
  'get-out-the-leaf': 'arrowright',
  'make-bold': 'mod+b',
  'make-italic': 'mod+i',
  'make-underlined': 'mod+u',
  'make-inline-code': ['mod+e', 'mod+`'],
  'set-link-for-text': 'mod+k',
  'copy': 'mod+c',
  'copy-all': 'mod+a',
  'paste': 'mod+v',
  'exit-block': 'mod+enter',
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
