import { Element } from 'slate'
import { LeafModification } from './leaf'

export type ElementType = Element['type']

export interface ElementSettings {
  // used in different interface elements
  readonly name: string

  // used in slash commands
  readonly code: string

  // 'code' aliases for better search
  readonly aliases?: string[]

  readonly canBeSearched?: boolean

  // leaf modifications which you can apply to element's text
  readonly allowedModifications: LeafModification[]

  // available transformations
  // for example, a paragraph can be transformed into the heading
  readonly allowedTransformations: ElementType[]
}
