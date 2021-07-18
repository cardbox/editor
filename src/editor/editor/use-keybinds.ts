import { useEditor } from '../lib/hooks/slate'
import { useUI } from '../lib/hooks/use-ui'
import {
  Action,
  ActionKeybinds,
  ActionsRegistry,
  OptionalActionKeybinds,
  PublicAction,
} from '../registries/actions'
import { keybinds } from '../registries/keybinds'
import React, { useCallback, useEffect } from 'react'

type AllKeybinds = ActionKeybinds<Action>

const defaultKeybinds: AllKeybinds = {
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

export function useKeybinds(
  customKeybinds: OptionalActionKeybinds<PublicAction>
) {
  const editor = useEditor()
  const ui = useUI()

  useEffect(() => {
    const finalKeybinds: AllKeybinds = {
      ...defaultKeybinds,
      ...customKeybinds,
    }

    // clear possible previous keybinds
    keybinds.unregisterAll()

    type Entries = Array<[Action, AllKeybinds[Action]]>
    const entries = Object.entries(finalKeybinds) as Entries

    entries.forEach(([action, keybind]) => {
      if (!keybind) return
      const keys = typeof keybind === 'string' ? [keybind] : keybind

      for (const key of keys) {
        keybinds.register(key, (editor, event) => {
          ActionsRegistry.execute(action, {
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
