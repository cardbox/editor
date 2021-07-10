import { Element } from 'slate'

export type ElementType = Element['type']

export type ElementByType<T extends ElementType, K extends Element = Element> =
  K extends {
    type: T
  }
    ? K
    : never
