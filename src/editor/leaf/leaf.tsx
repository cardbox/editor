import { Text } from 'slate'
import { LeafModification } from '../types'

export function createLeaf({
  text,
  href,
  modifications = [],
}: {
  text: string
  href?: string
  modifications?: LeafModification[]
}): Text {
  return modifications.reduce<Text>(
    (leaf, modification) => {
      leaf[modification] = true
      return leaf
    },
    {
      text,
      href,
    }
  )
}
