import { Editor, Text, Transforms } from 'slate'
import { LeafElement } from '../leaf'

export function toggleLeafProperty(
  editor: Editor,
  property: Exclude<keyof LeafElement, 'text'>
) {
  const leaf = Editor.marks(editor)
  if (!leaf) return

  Transforms.setNodes(
    editor,
    { [property]: leaf[property] ? undefined : true },
    { match: (node) => Text.isText(node), split: true }
  )
}
