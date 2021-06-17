import { nanoid } from 'nanoid'
import React from 'react'
import { Text } from 'slate'
import { RenderElementProps } from 'slate-react'
import { ALL_LEAF_MODIFICATIONS } from '../constants'
import { ElementSettings } from '../types'
import { ParagraphElement } from './paragraph.types'

export const createParagraphElement = (
  children: Text[] = [{ text: '' }]
): ParagraphElement => ({
  id: nanoid(),
  type: 'paragraph',
  children,
})

export const ParagraphComponent = ({
  attributes,
  children,
}: RenderElementProps) => {
  return <p {...attributes}>{children}</p>
}

export const PARAGRAPH_SETTINGS: ElementSettings = {
  name: 'Paragraph',
  code: 'paragraph',
  aliases: ['p', 'text'],
  allowedModifications: Array.from(ALL_LEAF_MODIFICATIONS),
  allowedTransformations: ['heading-1'],
}
