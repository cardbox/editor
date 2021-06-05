import React from 'react'
import { RenderElementProps } from 'slate-react'
import {
  Heading1Component,
  createHeading1Component,
  HEADING_1_SETTINGS,
} from './heading-1'
import {
  ParagraphComponent,
  createParagraphComponent,
  PARAGRAPH_SETTINGS,
} from './paragraph'
import {
  CreateDefaultElement,
  DefaultElementType,
  ElementComponentMapper,
  ElementSettingsMapper,
} from './types'

const DEFAULT_ELEMENT_TYPE: DefaultElementType = 'paragraph'
const createDefaultElement: CreateDefaultElement = createParagraphComponent

const ELEMENT_COMPONENT_MAPPER: ElementComponentMapper = {
  'paragraph': ParagraphComponent,
  'heading-1': Heading1Component,
}

const ELEMENT_SETTINGS_MAPPER: ElementSettingsMapper = {
  'paragraph': PARAGRAPH_SETTINGS,
  'heading-1': HEADING_1_SETTINGS,
}

export function renderElement(props: RenderElementProps) {
  const Component = ELEMENT_COMPONENT_MAPPER[props.element.type]
  return <Component {...props} />
}

export {
  ELEMENT_SETTINGS_MAPPER,
  DEFAULT_ELEMENT_TYPE,
  createDefaultElement,
  createParagraphComponent,
  createHeading1Component,
}

export * from './types'
