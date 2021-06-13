import React from 'react'
import { Extension } from './lib/extensions/extend'
import 'tippy.js/dist/tippy.css'
import './lib/tippy/themes.css'
import { RootProvider } from './root-provider'
import { EditorInner } from './editor-inner'
import { EditorValue } from './types'
import { CustomActionKeybinds } from './actions'

export const Editor = ({
  value,
  onChange,
  readOnly = false,
  customKeybinds = {},
  customExtensions = [],
}: {
  value: EditorValue
  onChange: (value: EditorValue) => void
  readOnly?: boolean
  customKeybinds?: CustomActionKeybinds
  customExtensions?: Extension[]
}) => {
  return (
    <RootProvider customExtensions={customExtensions}>
      <EditorInner
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        customKeybinds={customKeybinds}
      />
    </RootProvider>
  )
}
