import { TextModification } from '../../shared/types'
import { Editor } from 'slate'

export function toggleTextModification(
  editor: Editor,
  property: TextModification
) {
  const marks = Editor.marks(editor)
  if (!marks) return

  if (marks[property]) {
    editor.removeMark(property)
  } else {
    editor.addMark(property, true)
  }
}
