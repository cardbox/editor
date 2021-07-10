import { ALL_LEAF_MODIFICATIONS } from '../../constants'
import { ElementSettings } from '../../types'
import { ParagraphElement } from './paragraph.types'
import React from 'react'
import { Text } from 'slate'
import { RenderElementProps } from 'slate-react'

export const createParagraphElement = (
  children: Text[] = [{ text: '' }]
): ParagraphElement => ({
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
  type: 'paragraph',
  name: 'Paragraph',
  code: 'p',
  aliases: ['paragraph', 'text'],
  allowedModifications: Array.from(ALL_LEAF_MODIFICATIONS),
  allowedTransformations: ['heading-1'],
  create: createParagraphElement,
}
