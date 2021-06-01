import { Editor, Range, Text } from 'slate'

function hasSelection(editor: Editor): boolean {
  if (!editor.selection) {
    return false
  }

  return Range.isExpanded(editor.selection)
}

interface GetAboveOptions {
  type: 'block' | 'leaf'
  mode?: 'highest' | 'lowest'
}

function getAbove(editor: Editor, options: GetAboveOptions) {
  const { type, ...rest } = options

  return Editor.above(editor, {
    ...rest,
    match: (node) => {
      if (type === 'leaf') return Text.isText(node)
      return Editor.isBlock(editor, node)
    },
  })
}

export const Queries = {
  hasSelection,
  getAbove,
}
