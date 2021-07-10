import '../actions'
import '../features/code'
import '../features/list'
import '../features/paragraph'
import { PrismGlobalStyles } from '../lib/prism'
import { TippyGlobalStyles } from '../lib/tippy'
import { EditableEditor } from './editable-editor'
import { ReadonlyEditor } from './readonly-editor'
import { RootProvider } from './root-provider'
import { RootGlobalStyles } from './styles'
import { EditorProps, NormalizedEditorProps } from './types'
import React from 'react'

function normalizeProps(dirty: EditorProps): NormalizedEditorProps {
  return {
    ...dirty,
    customKeybinds: dirty.customKeybinds || {},
    customExtensions: dirty.customExtensions || [],
  }
}

export const Editor = (props: EditorProps) => {
  const normalizedProps = normalizeProps(props)

  const editor = normalizedProps.readOnly ? (
    <ReadonlyEditor {...normalizedProps} />
  ) : (
    <EditableEditor {...normalizedProps} />
  )

  return (
    <RootProvider customExtensions={normalizedProps.customExtensions}>
      <TippyGlobalStyles />
      <PrismGlobalStyles />
      <RootGlobalStyles />
      {editor}
    </RootProvider>
  )
}
