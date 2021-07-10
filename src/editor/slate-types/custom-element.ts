import { CodeElement, CodeLineElement } from '../features/code'
import {
  Heading1Element,
  Heading2Element,
  Heading3Element,
} from '../features/headings'
import { ListElement, ListItemElement } from '../features/list/elements/types'
import { ParagraphElement } from '../features/paragraph'

export type CustomElement =
  | ParagraphElement
  | Heading1Element
  | Heading2Element
  | Heading3Element
  | ListElement
  | ListItemElement
  | CodeElement
  | CodeLineElement
