import { LeafModification } from './leaf'
import { Element } from 'slate'

export type ElementType = Element['type']

export type ElementFromType<
  T extends ElementType,
  K extends Element = Element
> = K extends {
  type: T
}
  ? K
  : never

export interface ElementSettings {
  readonly type: ElementType

  // used in different interface elements
  readonly name: string

  // used in slash commands
  readonly code: string

  // 'code' aliases for better search
  readonly aliases?: string[]

  readonly canBeAdded?: boolean

  // leaf modifications which you can apply to element's text
  readonly allowedModifications: LeafModification[]

  // available transformations
  // for example, a paragraph can be transformed into the heading
  readonly allowedTransformations: ElementType[]

  readonly create: () => Element
}
