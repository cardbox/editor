import { Text } from 'slate'
import { ALL_LEAF_MODIFICATIONS } from '../../constants'
import { LeafModification } from '../../types'

export function leafModifications(
  leaf: Text,
  modifications: readonly LeafModification[] = ALL_LEAF_MODIFICATIONS
): LeafModification[] {
  return modifications.filter((modification) => leaf[modification])
}
