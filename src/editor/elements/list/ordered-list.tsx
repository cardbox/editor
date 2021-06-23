import { nanoid } from 'nanoid'
import React from 'react'
import { RenderElementProps } from 'slate-react'
import { ALL_LEAF_MODIFICATIONS } from '../../constants'
import { ElementSettings } from '../../types'
import { createListItemElement } from './list-item'
import { ListItemElement, OrderedListElement } from './types'

export const createOrderedListElement = (
  children: ListItemElement[] = [createListItemElement()]
): OrderedListElement => ({
  id: nanoid(),
  type: 'ordered-list',
  children,
})

export const OrderedListComponent = ({
  attributes,
  children,
}: RenderElementProps) => {
  return <ol {...attributes}>{children}</ol>
}

export const ORDERED_LIST_SETTINGS: ElementSettings = {
  name: 'Ordered List',
  code: 'ordered-list',
  aliases: ['ol'],
  allowedModifications: Array.from(ALL_LEAF_MODIFICATIONS),
  allowedTransformations: [],
}
