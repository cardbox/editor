import { SettingsRegistry } from '../../../registries/settings'
import {
  LINK_MODIFICATION,
  TEXT_MODIFICATIONS,
} from '../../../shared/constants'
import { ParagraphElement } from './types'
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

SettingsRegistry.set('paragraph', {
  type: 'paragraph',
  name: 'Paragraph',
  code: 'p',
  aliases: ['paragraph', 'text'],
  allowedModifications: [...TEXT_MODIFICATIONS, LINK_MODIFICATION],
  allowedTransformations: ['heading-1', 'heading-2', 'heading-3'],
  create: createParagraphElement,
})
