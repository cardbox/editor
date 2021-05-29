import React from 'react'
import { RenderElementProps } from 'slate-react'
import { LeafElement } from '../leaf'

export interface ParagraphElement {
  type: 'paragraph'
  children: LeafElement[]
}

export const ParagraphComponent = ({
  attributes,
  children,
}: RenderElementProps) => {
  return <p {...attributes}>{children}</p>
}
