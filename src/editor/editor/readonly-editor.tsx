import React from 'react'
import { Editable, Slate } from 'slate-react'
import { useEditor } from '../lib/hooks/slate'
import { decorations } from '../registries/decorations'
import { renderElement } from './render.element'
import { renderLeaf } from './render.leaf'
import { StyledEditor } from './styles'
import { ReadonlyEditorProps } from './types'

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
          autoCapitalize="false"
          autoCorrect="false"
          spellCheck="false"
        />
      </Slate>
    </StyledEditor>
  )
}
