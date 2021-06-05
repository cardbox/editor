import React from 'react'
import { BaseEditor, Descendant } from 'slate'
import { Editable, ReactEditor, Slate } from 'slate-react'
import { CustomElement, renderElement } from './elements'
import { renderLeaf } from './leaf'
import { CustomActionKeybinds } from './lib/action-controller/types'
import styles from './index.module.css'
import { Extension } from './lib/extensions/extend'
import { useExtendedEditor } from './lib/hooks/use-extended-editor'
import { useKeybinds } from './lib/hooks/use-keybinds'
import { LeafElement } from './leaf/types'
import { Toolbar, ToolbarModificationButton } from './toolbar'
import 'tippy.js/dist/tippy.css'
import './lib/tippy/themes.css'
import { EditorContext } from './lib/editor-context'

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
  const editor = useExtendedEditor(customExtensions)
  const { handleKeyDown } = useKeybinds(editor, customKeybinds)

  return (
    <EditorContext.Provider value={editor}>
      <Slate editor={editor} value={value} onChange={onChange}>
        <Editable
          className={styles.editor}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </Slate>
      <Toolbar editor={editor}>
        <ToolbarModificationButton
          modification="bold"
          icon="B"
          action="make-bold"
          tooltip="Bold (⌘B)"
          style={{ fontWeight: 'bold' }}
        />
        <ToolbarModificationButton
          modification="italic"
          icon="I"
          action="make-italic"
          tooltip="Italic (⌘I)"
          style={{ fontStyle: 'italic' }}
        />
        <ToolbarModificationButton
          modification="underlined"
          icon="U"
          action="make-underlined"
          tooltip="Underlined (⌘U)"
          style={{ textDecoration: 'underline' }}
        />
        <ToolbarModificationButton
          modification="inlineCode"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-code"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="7 8 3 12 7 16" />
              <polyline points="17 8 21 12 17 16" />
              <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
          }
          action="make-inline-code"
          tooltip="Inline-code (⌘E/⌘`)"
          style={{ width: 22, height: 22 }}
        />
      </Toolbar>
    </EditorContext.Provider>
  )
}
