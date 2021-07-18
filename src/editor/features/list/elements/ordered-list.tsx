import { SettingsRegistry } from '../../../registries/settings'
import {
  LINK_MODIFICATION,
  TEXT_MODIFICATIONS,
} from '../../../shared/constants'
import { createListItemElement } from './list-item'
import { ListItemElement, OrderedListElement } from './types'
import React from 'react'
import { RenderElementProps } from 'slate-react'

export const createOrderedListElement = (
  children: ListItemElement[] = [createListItemElement()]
): OrderedListElement => ({
  type: 'ordered-list',
  children,
})

export const OrderedListComponent = ({
  attributes,
  children,
}: RenderElementProps) => {
  return <ol {...attributes}>{children}</ol>
}

SettingsRegistry.set('ordered-list', {
  type: 'ordered-list',
  name: 'Ordered List',
  code: 'ol',
  aliases: ['ordered-list'],
  allowedModifications: [...TEXT_MODIFICATIONS, LINK_MODIFICATION],
  allowedTransformations: ['unordered-list'],
  create: createOrderedListElement,
})
