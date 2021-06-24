import React from 'react'
import { Element } from 'slate'
import { RenderElementProps } from 'slate-react'
import { ALL_LEAF_MODIFICATIONS } from '../../constants'
import { ElementSettings } from '../../types'
import { createParagraphElement } from '../paragraph'
import { ListItemElement } from './types'

export const createListItemElement = (
  children: Element[] = [createParagraphElement()]
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

export const LIST_ITEM_SETTINGS: ElementSettings = {
  name: 'List Item',
  code: 'list-item',
  aliases: ['li'],
  canBeSearched: false,
  allowedModifications: Array.from(ALL_LEAF_MODIFICATIONS),
  allowedTransformations: [],
}
