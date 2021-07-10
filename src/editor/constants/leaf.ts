import { CodeModification } from '../features/code'
import { LinkModification } from '../features/link'
import { TextModification } from '../features/text-modifications'

export const ALL_TEXT_MODIFICATIONS: TextModification[] = [
  'bold',
  'italic',
  'underlined',
  'inlineCode',
]

type LeafModification = TextModification | LinkModification | CodeModification

export const ALL_LEAF_MODIFICATIONS: LeafModification[] = [
  ...ALL_TEXT_MODIFICATIONS,
  'href',
  'prismToken',
]
