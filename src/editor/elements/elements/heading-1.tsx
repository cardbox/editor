import { ElementSettings } from '../../types'
import { Heading1Element } from './heading-1.types'
import React from 'react'
import { Text } from 'slate'
import { RenderElementProps } from 'slate-react'

export const createHeading1Element = (
  children: Text[] = [{ text: '' }]
): Heading1Element => ({
  type: 'heading-1',
  children,
})

export const Heading1Component = ({
  attributes,
  children,
}: RenderElementProps) => {
  return <h1 {...attributes}>{children}</h1>
}

export const HEADING_1_SETTINGS: ElementSettings = {
  type: 'heading-1',
  name: 'Heading-1',
  code: 'h1',
  aliases: ['heading-1', 'title'],
  allowedModifications: [],
  allowedTransformations: ['heading-2', 'heading-3', 'paragraph'],
  create: createHeading1Element,
}
