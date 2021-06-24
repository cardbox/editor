import React from 'react'
import { Editable, Slate } from 'slate-react'
import { renderElement } from './elements'
import { renderLeaf } from './leaf'
import { useKeybinds } from './use-keybinds'
import { useEditor } from './lib/hooks/use-editor'
import { useListeners } from './features/listeners'
import './features/list-interaction'
import './features/paragraph-interaction'
import { StyledEditor, TippyStyles } from './styles'
import { ReadonlyEditorProps } from './types/editor-props'

export const ReadonlyEditor = ({
  value,
  customKeybinds,
}: ReadonlyEditorProps) => {
  const editor = useEditor()
  const { handleKeyDown } = useKeybinds(customKeybinds)
  const { handlePaste } = useListeners()

  return (
    <StyledEditor>
      <TippyStyles />
      <Slate editor={editor} value={value} onChange={() => {}}>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={handleKeyDown}
          readOnly={true}
          onPaste={handlePaste}
          autoFocus
        />
      </Slate>
    </StyledEditor>
  )
}
