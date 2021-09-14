import React from 'react'
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { LinkPopupContext, useNewLinkPopupState } from '../features/link'
import { ToolbarContext, useNewToolbarState } from '../features/toolbar'
import { EditorContext } from '../lib/editor-context'

export const RootProvider = ({
  children,
  editor,
}: {
  children: JSX.Element | JSX.Element[]
  editor: BaseEditor & ReactEditor
}) => {
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
