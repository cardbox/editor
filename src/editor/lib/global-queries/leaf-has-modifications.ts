import { Text } from 'slate'
import { ALL_LEAF_MODIFICATIONS } from '../../constants'
import { LeafModification } from '../../types'

export function leafHasModifications(
  leaf: Text,
  modifications: readonly LeafModification[] = ALL_LEAF_MODIFICATIONS
): boolean {
  return modifications.some((modification) => leaf[modification])
}
