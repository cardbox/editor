import { Editor, NodeEntry } from 'slate'
import { CustomElement } from '../../elements'
import { LeafElement } from '../../leaf/types'

interface GetAboveOptionsBlock {
  type: 'block'
  mode?: 'highest' | 'lowest'
}

interface GetAboveOptionsLeaf {
  type: 'leaf'
  mode?: 'highest' | 'lowest'
}

export function getAbove(
  editor: Editor,
  options: GetAboveOptionsBlock
): NodeEntry<CustomElement> | undefined

export function getAbove(
  editor: Editor,
  options: GetAboveOptionsLeaf
): NodeEntry<LeafElement> | undefined

export function getAbove(
  editor: Editor,
  options: GetAboveOptionsBlock | GetAboveOptionsLeaf
) {
  const { type, ...rest } = options

  if (type === 'leaf') {
    if (!editor.selection) return
    return Editor.leaf(editor, editor.selection)
  }

  return Editor.above(editor, {
    ...rest,
    match: (node) => {
      return Editor.isBlock(editor, node)
    },
  })
}
