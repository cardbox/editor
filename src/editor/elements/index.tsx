import './elements/code/code'
import { createHeading1Element } from './elements/heading-1'
import {
  createOrderedListElement,
  createUnorderedListElement,
  createListItemElement,
} from './elements/list'
import { createParagraphElement } from './elements/paragraph'
import { CreateDefaultElement, DefaultElementType } from './elements/types'

const DEFAULT_ELEMENT_TYPE: DefaultElementType = 'paragraph'
const createDefaultElement: CreateDefaultElement = createParagraphElement

export {
  DEFAULT_ELEMENT_TYPE,
  createDefaultElement,
  createParagraphElement,
  createHeading1Element,
  createOrderedListElement,
  createUnorderedListElement,
  createListItemElement,
}

export * from './elements/types'
