import { Editor } from 'slate'
import { LeafModification } from '../leaf/types'

export function toggleLeafModification(
  editor: Editor,
  property: LeafModification
) {
  const leaf = Editor.marks(editor)
  if (!leaf) return

  if (leaf[property]) {
    editor.removeMark(property)
  } else {
    editor.addMark(property, true)
  }
}
