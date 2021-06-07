import { Editor } from 'slate'
import { LeafModification } from '../../leaf/types'

export function toggleModification(editor: Editor, property: LeafModification) {
  const marks = Editor.marks(editor)
  if (!marks) return

  if (marks[property]) {
    editor.removeMark(property)
  } else {
    editor.addMark(property, true)
  }
}
