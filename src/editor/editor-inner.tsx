import React from 'react'
import { Editable, Slate } from 'slate-react'
import { renderElement } from './entities/elements'
import { renderLeaf } from './entities/leaf'
import { CustomActionKeybinds } from './lib/action-controller/types'
import styles from './editor.module.css'
import { useKeybinds } from './lib/hooks/use-keybinds'
import { Toolbar } from './features/toolbar'
import 'tippy.js/dist/tippy.css'
import './lib/tippy/themes.css'
import { ToolbarModificationButton } from './features/toolbar/buttons'
import { useEditor } from './lib/hooks/use-editor'
import { EditorValue } from './types'

export const EditorInner = ({
  value,
  onChange,
  readOnly = false,
  customKeybinds = {},
}: {
  value: EditorValue
  onChange: (value: EditorValue) => void
  readOnly?: boolean
  customKeybinds?: CustomActionKeybinds
}) => {
  const editor = useEditor()
  const { handleKeyDown } = useKeybinds(customKeybinds)

  return (
    <>
      <Slate editor={editor} value={value} onChange={onChange}>
        <Editable
          className={styles.editor}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={handleKeyDown}
          readOnly={readOnly}
          autoFocus
        />
      </Slate>
      <ToolbarWithButtons />
    </>
  )
}

const ToolbarWithButtons = () => {
  return (
    <Toolbar
      renderButtons={() => (
        <>
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
            tooltip="Inline-code (⌘E)"
            style={{ width: 18, height: 18, paddingLeft: 4 }}
          />
        </>
      )}
    />
  )
}
