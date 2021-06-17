import { nanoid } from 'nanoid'
import React from 'react'
import { Text } from 'slate'
import { RenderElementProps } from 'slate-react'
import { ALL_LEAF_MODIFICATIONS } from '../../constants'
import { ElementSettings } from '../../types'
import { ListItemContentElement } from './types'

export const createListItemContentElement = (
  children: Text[] = [{ text: '' }]
): ListItemContentElement => ({
  id: nanoid(),
  type: 'list-item-content',
  children,
})

export const ListItemContentComponent = ({
  attributes,
  children,
}: RenderElementProps) => {
  return <div {...attributes}>{children}</div>
}

export const LIST_ITEM_CONTENT_SETTINGS: ElementSettings = {
  name: 'List Item Content',
  code: 'list-item-content',
  aliases: ['lic'],
  canBeSearched: false,
  allowedModifications: Array.from(ALL_LEAF_MODIFICATIONS),
  allowedTransformations: [],
}
