import React from 'react'
import { RootProvider } from './root-provider'
import { EditorProps, NormalizedEditorProps } from './types/editor-props'
import { EditableEditor } from './editable-editor'
import { ReadonlyEditor } from './readonly-editor'
import { RootGlobalStyles } from './styles'
import { TippyGlobalStyles } from './lib/tippy'
import { PrismGlobalStyles } from './lib/prism'
import './features/list-interaction'
import './features/paragraph-interaction'
import './features/code-interaction'

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
      <TippyGlobalStyles />
      <PrismGlobalStyles />
      <RootGlobalStyles />
      {editor}
    </RootProvider>
  )
}
