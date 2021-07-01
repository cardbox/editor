import React from 'react'
import { Editable, Slate } from 'slate-react'
import { decorations } from './decorations'
import { useEditor } from './lib/hooks/slate/use-editor'
import { renderElement } from './render.element'
import { renderLeaf } from './render.leaf'
import { StyledEditor } from './styles'
import { ReadonlyEditorProps } from './types/editor-props'

export const ReadonlyEditor = ({ value }: ReadonlyEditorProps) => {
  const editor = useEditor()

  return (
    <StyledEditor>
      <Slate editor={editor} value={value} onChange={() => {}}>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          decorate={decorations.createHandler(editor)}
          readOnly={true}
        />
      </Slate>
    </StyledEditor>
  )
}
