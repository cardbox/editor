import { Heading1Element } from './heading-1.types'
import { ListElement, ListItemElement } from './list/types'
import { ParagraphElement } from './paragraph.types'

export type CustomElement =
  | ParagraphElement
  | Heading1Element
  | ListElement
  | ListItemElement

export type DefaultElement = ParagraphElement
export type DefaultElementType = DefaultElement['type']
export type CreateDefaultElement = () => DefaultElement
