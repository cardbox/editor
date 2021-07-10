import {
  CodeModification,
  LeafModification,
  LinkModification,
  TextModification,
} from '../types/leaf'

export const TEXT_MODIFICATIONS: TextModification[] = [
  'bold',
  'italic',
  'underlined',
  'inlineCode',
]
export const LINK_MODIFICATION: LinkModification = 'href'
export const CODE_MODIFICATION: CodeModification = 'prismToken'

export const LEAF_MODIFICATIONS: LeafModification[] = [
  ...TEXT_MODIFICATIONS,
  LINK_MODIFICATION,
  CODE_MODIFICATION,
]
