import { Editor } from 'slate'
import { ElementType } from '../../types'
import { getAbove } from './get-above'

export function isInBlock(
  editor: Editor,
  block: ElementType | ElementType[]
): boolean {
  const blocks: ElementType[] = Array.isArray(block) ? block : [block]

  const blockAbove = getAbove(editor, {
    type: 'block',
    match: (block) => {
      return blocks.includes(block.type)
    },
  })

  return Boolean(blockAbove)
}
