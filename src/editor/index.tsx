import React from 'react'
import { BaseEditor, Descendant } from 'slate'
import { Editable, ReactEditor, Slate } from 'slate-react'
import { CustomElement, renderElement } from './elements'
import { renderLeaf } from './leaf'
import { CustomActionKeybinds } from './lib/action-controller/types'
import styles from './index.module.css'
import { Extension } from './lib/extensions/extend'
import { useEditor } from './use-editor'
import { useKeybinds } from './use-keybinds'
import { LeafElement } from './leaf/types'

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: LeafElement
  }
}

export type EditorValue = Descendant[]

interface Props {
  value: EditorValue
  onChange: (value: EditorValue) => void
  customKeybinds?: CustomActionKeybinds
  customExtensions?: Extension[]
}

export const Editor = ({
  value,
  onChange,
  customKeybinds = {},
  customExtensions = [],
}: Props) => {
  const editor = useEditor(customExtensions)
  const { handleKeyDown } = useKeybinds(editor, customKeybinds)

  return (
    <Slate editor={editor} value={value} onChange={onChange}>
      <Editable
        className={styles.editor}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </Slate>
  )
}
