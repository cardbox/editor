import { Editor, Location, NodeEntry } from 'slate'
import { CustomElement } from '../../entities/elements'
import { LeafElement } from '../../entities/leaf/types'

interface GetAboveOptionsBlock {
  type: 'block'
  mode?: 'highest' | 'lowest'
  at?: Location
}

interface GetAboveOptionsLeaf {
  type: 'leaf'
  mode?: 'highest' | 'lowest'
  at?: Location
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
    const { at = editor.selection } = rest
    if (!at) return
    return Editor.leaf(editor, at)
  }

  return Editor.above(editor, {
    ...rest,
    match: (node) => {
      return Editor.isBlock(editor, node)
    },
  })
}
