import { Editor, Location, NodeEntry } from 'slate'
import { CustomElement } from '../../elements'
import { LeafElement } from '../../leaf/types'

interface CommonOptions {
  at?: Location
}

interface BlockOptions {
  type: 'block'
  mode?: 'highest' | 'lowest'
  match?: (block: CustomElement) => boolean
}

interface LeafOptions {
  type: 'leaf'
}

type TypeOptions = BlockOptions | LeafOptions

type Options = CommonOptions & TypeOptions

export function getAbove(
  editor: Editor,
  options: Options & BlockOptions
): NodeEntry<CustomElement> | undefined

export function getAbove(
  editor: Editor,
  options: Options & LeafOptions
): NodeEntry<LeafElement> | undefined

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
