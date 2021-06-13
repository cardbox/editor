import { Editor, Element, Location, NodeEntry, Text } from 'slate'

interface CommonOptions {
  at?: Location
}

interface BlockOptions {
  type: 'block'
  mode?: 'highest' | 'lowest'
  match?: (block: Element) => boolean
}

interface LeafOptions {
  type: 'leaf'
}

type TypeOptions = BlockOptions | LeafOptions

type Options = CommonOptions & TypeOptions

export function getAbove<T extends Element>(
  editor: Editor,
  options: Options & BlockOptions
): NodeEntry<T> | undefined

export function getAbove(
  editor: Editor,
  options: Options & LeafOptions
): NodeEntry<Text> | undefined

export function getAbove(editor: Editor, options: Options) {
  if (options.type === 'leaf') {
    const { at = editor.selection } = options
    if (!at) return
    return Editor.leaf(editor, at)
  }

  const { match = () => true, ...rest } = options

  return Editor.above(editor, {
    ...rest,
    match: (node) => {
      if (!Editor.isBlock(editor, node)) return false
      return match(node)
    },
  })
}
