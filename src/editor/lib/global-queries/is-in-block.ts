import { Editor } from 'slate'
import { ElementType } from '../../types'
import { GlobalMatchers } from '../global-matchers'
import { getAbove } from './get-above'

export function isInBlock(
  editor: Editor,
  block: ElementType | ElementType[]
): boolean {
  const blockAbove = getAbove(editor, {
    type: 'block',
    match: GlobalMatchers.block(editor, block),
  })

  console.log(blockAbove)

  return Boolean(blockAbove)
}
