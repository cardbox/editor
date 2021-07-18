import { SettingsRegistry } from '../../../registries/settings'
import { Heading2Element } from './types'
import React from 'react'
import { Text } from 'slate'
import { RenderElementProps } from 'slate-react'

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

SettingsRegistry.set('heading-2', {
  type: 'heading-2',
  name: 'Heading-2',
  code: 'h2',
  aliases: ['heading-2', 'title'],
  allowedModifications: [],
  allowedTransformations: ['heading-1', 'heading-3', 'paragraph'],
  create: createHeading2Element,
})
