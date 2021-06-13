export type LeafModification = 'bold' | 'italic' | 'underlined' | 'inlineCode'

export type LeafModifications = {
  [Modification in LeafModification]?: boolean
}
