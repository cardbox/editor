import React from 'react'
import { RenderElementProps } from 'slate-react'
import { ParagraphElement, ParagraphComponent } from './paragraph'

export type CustomElement = ParagraphElement

export type CustomElementType = CustomElement['type']

type ElementMapper = {
  [ElementType in CustomElementType]: (props: RenderElementProps) => JSX.Element
}

const elementMapper: ElementMapper = {
  paragraph: ParagraphComponent,
}

export function renderElement(props: RenderElementProps) {
  const Component = elementMapper[props.element.type]
  return <Component {...props} />
}
