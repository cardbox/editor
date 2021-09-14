import { BaseEditor, Element, Editor } from 'slate'
import { ReactEditor } from 'slate-react'
import { EditorValue } from '../../shared/types'

export function isEmpty(editor: BaseEditor & ReactEditor, value: EditorValue) {
  return value.every((block) => Editor.isEmpty(editor, block as Element))
}
