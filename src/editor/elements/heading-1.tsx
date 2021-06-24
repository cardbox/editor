import React from 'react'
import { Text } from 'slate'
import { RenderElementProps } from 'slate-react'
import { ElementSettings } from '../types'
import { Heading1Element } from './heading-1.types'

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
  name: 'Heading-1',
  code: 'heading-1',
  aliases: ['h1', 'title'],
  allowedModifications: [],
  allowedTransformations: ['paragraph'],
}
