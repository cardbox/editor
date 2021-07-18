import { SettingsRegistry } from '../../../registries/settings'
import { Heading3Element } from './types'
import React from 'react'
import { Text } from 'slate'
import { RenderElementProps } from 'slate-react'

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

SettingsRegistry.set('heading-3', {
  type: 'heading-3',
  name: 'Heading-3',
  code: 'h3',
  aliases: ['heading-3', 'title'],
  allowedModifications: [],
  allowedTransformations: ['heading-1', 'heading-2', 'paragraph'],
  create: createHeading3Element,
})
