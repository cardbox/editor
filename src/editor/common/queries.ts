import { Editor } from 'slate'

interface GetAboveOptions {
  type: 'block'
  mode?: 'highest' | 'lowest'
}

function getAbove(editor: Editor, options: GetAboveOptions) {
  const { type, ...rest } = options

  return Editor.above(editor, {
    ...rest,
    match: (node) => {
      return Editor.isBlock(editor, node)
    },
  })
}

export const Queries = {
  getAbove,
}
