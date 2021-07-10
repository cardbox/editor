import { TextModification } from '../../shared/types'
import { Text } from 'slate'

export function textModifications(
  leaf: Text,
  modifications: readonly TextModification[] = [
    'bold',
    'italic',
    'underlined',
    'inlineCode',
  ]
): TextModification[] {
  return modifications.filter((modification) => leaf[modification])
}
