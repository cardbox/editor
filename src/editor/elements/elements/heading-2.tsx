import React from 'react'
import { Text } from 'slate'
import { RenderElementProps } from 'slate-react'
import { ElementSettings } from '../../types'

import { Heading2Element } from './heading-2.types'

export const createHeading2Element = (
  children: Text[] = [{ text: '' }]
): Heading2Element => ({
  type: 'heading-2',
  children,
})

export const Heading2Component = ({
  attributes,
  children,
}: RenderElementProps) => {
  return <h2 {...attributes}>{children}</h2>
}

export const HEADING_2_SETTINGS: ElementSettings = {
  type: 'heading-2',
  name: 'Heading-2',
  code: 'h2',
  aliases: ['heading-2', 'title'],
  allowedModifications: [],
  allowedTransformations: ['heading-1', 'heading-3', 'paragraph'],
  create: createHeading2Element,
}