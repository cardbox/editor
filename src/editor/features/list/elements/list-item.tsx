import { SettingsRegistry } from '../../../registries/settings'
import {
  LINK_MODIFICATION,
  TEXT_MODIFICATIONS,
} from '../../../shared/constants'
import { ListItemElement } from './types'
import React from 'react'
import { Element } from 'slate'
import { RenderElementProps } from 'slate-react'

export const createListItemElement = (
  children: Element[] = [{ type: 'paragraph', children: [{ text: '' }] }]
): ListItemElement => ({
  type: 'list-item',
  children,
})

export const ListItemComponent = ({
  attributes,
  children,
}: RenderElementProps) => {
  return <li {...attributes}>{children}</li>
}

SettingsRegistry.set('list-item', {
  type: 'list-item',
  name: 'List Item',
  code: 'li',
  aliases: ['list-item'],
  canBeAdded: false,
  allowedModifications: [...TEXT_MODIFICATIONS, LINK_MODIFICATION],
  allowedTransformations: [],
  create: createListItemElement,
})
