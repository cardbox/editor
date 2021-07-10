import { TextModification } from '../../../shared/types'

export type WithTextModifications = {
  [Modification in TextModification]?: boolean
}
