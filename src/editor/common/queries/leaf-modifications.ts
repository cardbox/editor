import {
  LeafElement,
  LeafModification,
  LEAF_MODIFICATIONS,
} from '../../leaf/types'

export function leafModifications(
  leaf: LeafElement,
  modifications: readonly LeafModification[] = LEAF_MODIFICATIONS
): LeafModification[] {
  return modifications.filter((modification) => leaf[modification])
}
