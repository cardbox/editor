import React from 'react'
import { RenderElementProps } from 'slate-react'
import { Heading1Component, Heading1Element } from './heading-1'
import {
  ParagraphElement,
  ParagraphComponent,
  createParagraphComponent,
} from './paragraph'

export type CustomElement = ParagraphElement | Heading1Element
export type DefaultElement = ParagraphElement

export type CustomElementType = CustomElement['type']
export type DefaultElementType = DefaultElement['type']

type ElementMapper = {
  [ElementType in CustomElementType]: (props: RenderElementProps) => JSX.Element
}

export const DEFAULT_ELEMENT_TYPE: DefaultElementType = 'paragraph'
type CreateDefaultElement = () => DefaultElement
export const createDefaultElement: CreateDefaultElement =
  createParagraphComponent

const elementMapper: ElementMapper = {
  'paragraph': ParagraphComponent,
  'heading-1': Heading1Component,
}

export function renderElement(props: RenderElementProps) {
  const Component = elementMapper[props.element.type]
  return <Component {...props} />
}

export { createParagraphComponent } from './paragraph'
