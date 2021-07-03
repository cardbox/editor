import React from 'react'
import { Text } from 'slate'
import { RenderElementProps } from 'slate-react'
import { ElementSettings } from '../../types'

import { Heading3Element } from './heading-3.types'

export const createHeading3Element = (
  children: Text[] = [{ text: '' }]
): Heading3Element => ({
  type: 'heading-3',
  children,
})

export const Heading3Component = ({
  attributes,
  children,
}: RenderElementProps) => {
  return <h3 {...attributes}>{children}</h3>
}

export const HEADING_3_SETTINGS: ElementSettings = {
  type: 'heading-3',
  name: 'Heading-3',
  code: 'h3',
  aliases: ['heading-3', 'title'],
  allowedModifications: [],
  allowedTransformations: ['heading-1', 'heading-2', 'paragraph'],
  create: createHeading3Element,
}
