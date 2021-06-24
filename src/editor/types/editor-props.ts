import { CustomActionKeybinds } from '../actions'
import { Extension } from '../lib/extensions/extend'
import { EditorValue } from './editor'

interface Common {
  value: EditorValue
  customKeybinds?: CustomActionKeybinds
  customExtensions?: Extension[]
  readOnly?: boolean
}

interface WithReadOnly {
  readOnly: true
}

interface WithoutReadOnly {
  readOnly?: false
  onChange: (value: EditorValue) => void
}

interface WithNormalized {
  customKeybinds: CustomActionKeybinds
  customExtensions: Extension[]
}

export type EditorProps = Common & (WithReadOnly | WithoutReadOnly)
export type NormalizedEditorProps = EditorProps & WithNormalized
export type ReadonlyEditorProps = NormalizedEditorProps & WithReadOnly
export type EditableEditorProps = NormalizedEditorProps & WithoutReadOnly
