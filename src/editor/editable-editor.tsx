import React, { useEffect } from 'react'
import { Editable, Slate } from 'slate-react'
import { createDefaultElement, renderElement } from './elements'
import { renderLeaf } from './leaf'
import { useKeybinds } from './use-keybinds'
import { Toolbar } from './features/toolbar'
import { ToolbarMarkButton } from './features/toolbar/buttons'
import { useEditor } from './lib/hooks/use-editor'
import { LinkPopup } from './features/link-popup'
import { useListeners } from './features/listeners'
import { StyledEditor } from './styles'
import { EditableEditorProps } from './types/editor-props'
import { decorations } from './decorations'

export const EditableEditor = ({
  value,
  onChange,
  customKeybinds,
}: EditableEditorProps) => {
  const editor = useEditor()
  const { handleKeyDown } = useKeybinds(customKeybinds)
  const { handlePaste } = useListeners()

  useEffect(() => {
    if (value.length > 0) return
    onChange([createDefaultElement()])
  }, [value])

  return (
    <StyledEditor>
      <Slate editor={editor} value={value} onChange={onChange}>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          decorate={decorations.createHandler(editor)}
          readOnly={false}
          autoFocus
        />
      </Slate>

      <ToolbarWithButtons />
      <LinkPopup />
    </StyledEditor>
  )
}

const ToolbarWithButtons = () => {
  return (
    <Toolbar
      renderButtons={() => (
        <>
          <ToolbarMarkButton
            mark="bold"
            icon="B"
            action="make-bold"
            tooltip="Bold (⌘B)"
            style={{ fontWeight: 'bold' }}
          />
          <ToolbarMarkButton
            mark="italic"
            icon="I"
            action="make-italic"
            tooltip="Italic (⌘I)"
            style={{ fontStyle: 'italic' }}
          />
          <ToolbarMarkButton
            mark="underlined"
            icon="U"
            action="make-underlined"
            tooltip="Underlined (⌘U)"
            style={{ textDecoration: 'underline' }}
          />
          <ToolbarMarkButton
            mark="inlineCode"
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
          <ToolbarMarkButton
            mark="href"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z"
                  fill="currentColor"
                />
                <path
                  d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z"
                  fill="currentColor"
                />
                <path
                  d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z"
                  fill="currentColor"
                />
              </svg>
            }
            action="set-link-for-text"
            tooltip="Link (⌘K)"
            style={{ width: 18, height: 18, paddingLeft: 4 }}
          />
        </>
      )}
    />
  )
}
