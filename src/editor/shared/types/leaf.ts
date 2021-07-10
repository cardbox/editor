export type TextModification = 'bold' | 'italic' | 'underlined' | 'inlineCode'
export type LinkModification = 'href'
export type CodeModification = 'prismToken'

export type LeafModification =
  | TextModification
  | LinkModification
  | CodeModification
