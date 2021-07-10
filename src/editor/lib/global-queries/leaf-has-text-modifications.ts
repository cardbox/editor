import { TextModification } from '../../shared/types'
import { Text } from 'slate'

export function leafHasTextModifications(
  leaf: Text,
  modifications: readonly TextModification[] = [
    'bold',
    'italic',
    'underlined',
    'inlineCode',
  ]
): boolean {
  return modifications.some((modification) => leaf[modification])
}
