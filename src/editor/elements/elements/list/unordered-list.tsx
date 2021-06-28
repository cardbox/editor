import React from 'react'
import { RenderElementProps } from 'slate-react'
import { ALL_LEAF_MODIFICATIONS } from '../../../constants'
import { ElementSettings } from '../../../types'
import { createListItemElement } from './list-item'
import { ListItemElement, UnorderedListElement } from './types'

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

export const UNORDERED_LIST_SETTINGS: ElementSettings = {
  type: 'unordered-list',
  name: 'Unordered List',
  code: 'ul',
  aliases: ['unordered-list'],
  allowedModifications: Array.from(ALL_LEAF_MODIFICATIONS),
  allowedTransformations: ['ordered-list'],
  create: createUnorderedListElement,
}
