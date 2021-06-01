import { Ancestor, Editor, NodeEntry, Range } from 'slate'
import { LeafElement } from '../leaf'

function hasSelection(editor: Editor): boolean {
  if (!editor.selection) {
    return false
  }

  return Range.isExpanded(editor.selection)
}

interface GetAboveOptionsBlock {
  type: 'block'
  mode?: 'highest' | 'lowest'
}

interface GetAboveOptionsLeaf {
  type: 'leaf'
  mode?: 'highest' | 'lowest'
}

function getAbove(
  editor: Editor,
  options: GetAboveOptionsBlock
): NodeEntry<Ancestor> | undefined

function getAbove(
  editor: Editor,
  options: GetAboveOptionsLeaf
): NodeEntry<LeafElement> | undefined

function getAbove(
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

export const Queries = {
  hasSelection,
  getAbove,
}
