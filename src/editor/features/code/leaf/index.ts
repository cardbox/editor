import { CodeModification } from '../../../shared/types'

export type WithCode = {
  [Modification in CodeModification]?: string
}
