import '../actions'
import '../features/code'
import '../features/list'
import '../features/paragraph'
import React from 'react'
import { EditableEditor } from './editable-editor'
import { ReadonlyEditor } from './readonly-editor'
import { RootProvider } from './root-provider'
import { EditorProps, NormalizedEditorProps } from './types'

function normalizeProps(dirty: EditorProps): NormalizedEditorProps {
  return {
    ...dirty,
    customKeybinds: dirty.customKeybinds || {},
  }
}

export const Editor = (props: EditorProps) => {
  const normalizedProps = normalizeProps(props)

  const editor = normalizedProps.readOnly ? (
    <ReadonlyEditor {...normalizedProps} />
  ) : (
    <EditableEditor {...normalizedProps} />
  )

  return <RootProvider editor={normalizedProps.editor}>{editor}</RootProvider>
}
