import React from 'react'
import { RenderElementProps } from 'slate-react'
import {
  Heading1Component,
  createHeading1Element,
  HEADING_1_SETTINGS,
} from './heading-1'
import {
  ListItemComponent,
  ListItemContentComponent,
  LIST_ITEM_CONTENT_SETTINGS,
  LIST_ITEM_SETTINGS,
  OrderedListComponent,
  ORDERED_LIST_SETTINGS,
  UnorderedListComponent,
  UNORDERED_LIST_SETTINGS,
  createOrderedListElement,
  createUnorderedListElement,
  createListItemContentElement,
  createListItemElement,
} from './list'
import {
  ParagraphComponent,
  createParagraphElement,
  PARAGRAPH_SETTINGS,
} from './paragraph'
import {
  CreateDefaultElement,
  DefaultElementType,
  ElementComponentMapper,
  ElementSettingsMapper,
} from './types'

const DEFAULT_ELEMENT_TYPE: DefaultElementType = 'paragraph'
const createDefaultElement: CreateDefaultElement = createParagraphElement

const ELEMENT_COMPONENT_MAPPER: ElementComponentMapper = {
  'paragraph': ParagraphComponent,
  'heading-1': Heading1Component,
  'ordered-list': OrderedListComponent,
  'unordered-list': UnorderedListComponent,
  'list-item': ListItemComponent,
  'list-item-content': ListItemContentComponent,
}

const ELEMENT_SETTINGS_MAPPER: ElementSettingsMapper = {
  'paragraph': PARAGRAPH_SETTINGS,
  'heading-1': HEADING_1_SETTINGS,
  'ordered-list': ORDERED_LIST_SETTINGS,
  'unordered-list': UNORDERED_LIST_SETTINGS,
  'list-item': LIST_ITEM_SETTINGS,
  'list-item-content': LIST_ITEM_CONTENT_SETTINGS,
}

export function renderElement(props: RenderElementProps) {
  const Component = ELEMENT_COMPONENT_MAPPER[props.element.type]
  return <Component {...props} />
}

export {
  ELEMENT_SETTINGS_MAPPER,
  DEFAULT_ELEMENT_TYPE,
  createDefaultElement,
  createParagraphElement,
  createHeading1Element,
  createOrderedListElement,
  createUnorderedListElement,
  createListItemContentElement,
  createListItemElement,
}

export * from './types'
