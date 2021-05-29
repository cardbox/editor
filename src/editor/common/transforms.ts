import { Editor } from 'slate'
import { LeafElement } from '../leaf'

export function toggleLeafProperty(
  editor: Editor,
  property: Exclude<keyof LeafElement, 'text'>
) {
  const leaf = Editor.marks(editor)
  if (!leaf) return

  if (leaf[property]) {
    editor.removeMark(property)
  } else {
    editor.addMark(property, true)
  }
}
