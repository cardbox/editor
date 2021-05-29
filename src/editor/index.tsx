import React, { useEffect, useMemo } from 'react'
import { BaseEditor, createEditor, Descendant } from 'slate'
import { Editable, ReactEditor, Slate, withReact } from 'slate-react'
import { withHistory } from 'slate-history'
import { actionController } from './actions'
import { keybindController } from './keybinds'
import { CustomElement, renderElement } from './elements'
import { LeafElement, renderLeaf } from './leaf'
import { Action, ActionKeybinds } from './lib/action-controller/types'
import styles from './index.module.css'

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: LeafElement
  }
}

export type EditorValue = Descendant[]

function useEditor() {
  return useMemo(() => {
    return withReact(withHistory(createEditor()))
  }, [])
}

function useKeybinds(keybinds: ActionKeybinds) {
  useEffect(() => {
    keybindController.unregisterAll()
    Object.entries<ActionKeybinds[Action]>(keybinds).forEach(
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
  }, [keybinds])
}

interface Props {
  value: EditorValue
  onChange: (value: EditorValue) => void
  keybinds: ActionKeybinds
}

export const Editor = ({ value, onChange, keybinds }: Props) => {
  const editor = useEditor()
  useKeybinds(keybinds)

  const handleKeyDown = (event: React.KeyboardEvent) => {
    keybindController.keyDown(event, editor)
  }

  return (
    <Slate editor={editor} value={value} onChange={onChange}>
      <Editable
        className={styles.editor}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={handleKeyDown}
      />
    </Slate>
  )
}
