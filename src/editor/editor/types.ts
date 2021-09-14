import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { OptionalActionKeybinds, PublicAction } from '../registries/actions'
import { EditorValue } from '../shared/types'

interface Common {
  value: EditorValue
  customKeybinds?: OptionalActionKeybinds<PublicAction>
  editor: BaseEditor & ReactEditor
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
  customKeybinds: OptionalActionKeybinds<PublicAction>
}

export type EditorProps = Common & (WithReadOnly | WithoutReadOnly)
export type NormalizedEditorProps = EditorProps & WithNormalized
export type ReadonlyEditorProps = NormalizedEditorProps & WithReadOnly
export type EditableEditorProps = NormalizedEditorProps & WithoutReadOnly
