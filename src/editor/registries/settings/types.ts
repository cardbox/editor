import { Element } from 'slate'

export interface ElementSettings {
  readonly type: Element['type']

  // used in different interface elements
  readonly name: string

  // used in slash commands
  readonly code: string

  // 'code' aliases for better search
  readonly aliases?: string[]

  readonly canBeAdded?: boolean

  // leaf modifications which you can apply to element's text
  readonly allowedModifications: Array<
    'bold' | 'italic' | 'underlined' | 'inlineCode' | 'href' | 'prismToken'
  >

  // available transformations
  // for example, a paragraph can be transformed into the heading
  readonly allowedTransformations: Element['type'][]

  readonly create: () => Element
}
