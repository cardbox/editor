import { LeafElement, LeafModification, LEAF_MODIFICATIONS } from '../../leaf'

export function leafHasModifications(
  leaf: LeafElement,
  modifications: readonly LeafModification[] = LEAF_MODIFICATIONS
): boolean {
  return modifications.some((modification) => leaf[modification])
}
