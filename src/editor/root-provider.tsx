import React from 'react'
import { Extension } from './lib/extensions/extend'
import { useExtendedEditor } from './use-extended-editor'
import { ToolbarContext, useNewToolbarState } from './features/toolbar'
import { EditorContext } from './lib/editor-context'
import { LinkPopupContext, useNewLinkPopupState } from './features/link-popup'

export const RootProvider = ({
  children,
  customExtensions = [],
}: {
  children: JSX.Element | JSX.Element[]
  customExtensions?: Extension[]
}) => {
  const editor = useExtendedEditor(customExtensions)
  const toolbarState = useNewToolbarState()
  const linkPopupState = useNewLinkPopupState()

  return (
    <EditorContext.Provider value={editor}>
      <ToolbarContext.Provider value={toolbarState}>
        <LinkPopupContext.Provider value={linkPopupState}>
          {children}
        </LinkPopupContext.Provider>
      </ToolbarContext.Provider>
    </EditorContext.Provider>
  )
}
