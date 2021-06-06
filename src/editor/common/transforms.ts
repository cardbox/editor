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

export function updateLeafHref(editor: Editor, href: string) {
  const leaf = Editor.marks(editor)
  if (!leaf) return

  editor.addMark('href', href)
}

export function clearLeafHref(editor: Editor) {
  const leaf = Editor.marks(editor)
  if (!leaf) return

  editor.removeMark('href')
}
