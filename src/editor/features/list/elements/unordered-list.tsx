import { SettingsRegistry } from '../../../registries/settings'
import {
  LINK_MODIFICATION,
  TEXT_MODIFICATIONS,
} from '../../../shared/constants'
import { createListItemElement } from './list-item'
import { ListItemElement, UnorderedListElement } from './types'
import React from 'react'
import { RenderElementProps } from 'slate-react'

export const createUnorderedListElement = (
  children: ListItemElement[] = [createListItemElement()]
): UnorderedListElement => ({
  type: 'unordered-list',
  children,
})

export const UnorderedListComponent = ({
  attributes,
  children,
}: RenderElementProps) => {
  return <ul {...attributes}>{children}</ul>
}

SettingsRegistry.set('unordered-list', {
  type: 'unordered-list',
  name: 'Unordered List',
  code: 'ul',
  aliases: ['unordered-list'],
  allowedModifications: [...TEXT_MODIFICATIONS, LINK_MODIFICATION],
  allowedTransformations: ['ordered-list'],
  create: createUnorderedListElement,
})
