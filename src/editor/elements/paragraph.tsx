import React from 'react'
import { RenderElementProps } from 'slate-react'
import { LeafElement } from '../leaf/types'

export interface ParagraphElement {
  type: 'paragraph'
  children: LeafElement[]
}

export const createParagraphComponent = (): ParagraphElement => ({
  type: 'paragraph',
  children: [{ text: '' }],
})

export const ParagraphComponent = ({
  attributes,
  children,
}: RenderElementProps) => {
  return <p {...attributes}>{children}</p>
}
