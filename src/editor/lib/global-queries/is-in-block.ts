import { Editor, Location } from 'slate'
import { ElementType } from '../../types'
import { GlobalMatchers } from '../global-matchers'
import { getAbove } from './get-above'

interface Options {
  at?: Location
}

export function isInBlock(
  editor: Editor,
  block: ElementType | ElementType[],
  options: Options = {}
): boolean {
  const { at = editor.selection } = options
  if (!at) return false

  /*
   * Fix for expanded selections
   */
  const path = Editor.path(editor, at)
  const [node] = Editor.node(editor, path)
  const isBlock = GlobalMatchers.block(editor, block)
  if (isBlock(node)) return true

  const blockAbove = getAbove(editor, {
    type: 'block',
    match: GlobalMatchers.block(editor, block),
  })

  return Boolean(blockAbove)
}
