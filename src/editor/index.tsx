import React, { useEffect, useMemo } from 'react'
import { BaseEditor, createEditor, Descendant } from 'slate'
import { Editable, ReactEditor, Slate, withReact } from 'slate-react'
import { actionController } from './actions'
import { keybindController } from './keybinds'
import { CustomElement, renderElement } from './elements'
import { LeafElement, renderLeaf } from './leaf'
import { Action, ActionKeybinds } from './lib/action-controller/types'

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
    return withReact(createEditor())
  }, [])
}

interface Props {
  value: EditorValue
  onChange: (value: EditorValue) => void
  keybinds: ActionKeybinds
}

export const Editor = ({ value, onChange, keybinds }: Props) => {
  const editor = useEditor()

  useEffect(() => {
    Object.entries<string>(keybinds).forEach(([action, keybind]) => {
      keybindController.register(
        keybind,
        actionController.carryExecute(action as Action)
      )
    })
  }, [keybinds])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    keybindController.keyDown(event, editor)
  }

  return (
    <Slate editor={editor} value={value} onChange={onChange}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={handleKeyDown}
      />
    </Slate>
  )
}
