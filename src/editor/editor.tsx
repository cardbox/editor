import React from 'react'
import { RootProvider } from './root-provider'
import { EditorProps, NormalizedEditorProps } from './types/editor-props'
import { EditableEditor } from './editable-editor'
import { ReadonlyEditor } from './readonly-editor'
import { RootGlobalStyles } from './styles'
import { TippyGlobalStyles } from './lib/tippy'

function normalizeProps(dirty: EditorProps): NormalizedEditorProps {
  const normalized: Partial<NormalizedEditorProps> = { ...dirty }

  if (!dirty.customKeybinds) {
    normalized.customKeybinds = {}
  }

  if (!dirty.customExtensions) {
    normalized.customExtensions = []
  }

  return normalized as NormalizedEditorProps
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
      <RootGlobalStyles />
      <TippyGlobalStyles />
      {editor}
    </RootProvider>
  )
}
