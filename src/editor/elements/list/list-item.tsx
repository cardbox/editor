import { nanoid } from 'nanoid'
import React from 'react'
import { Text } from 'slate'
import { RenderElementProps } from 'slate-react'
import { ALL_LEAF_MODIFICATIONS } from '../../constants'
import { ElementSettings } from '../../types'
import styles from './index.module.css'
import { createListItemContentElement } from './list-item-content'
import { ListItemElement } from './types'

export const createListItemElement = (
  children: Text[] = [{ text: '' }]
): ListItemElement => ({
  id: nanoid(),
  type: 'list-item',
  children: [createListItemContentElement(children)],
})

export const ListItemComponent = ({
  attributes,
  children,
}: RenderElementProps) => {
  return (
    <li className={styles.listItem} {...attributes}>
      {children}
    </li>
  )
}

export const LIST_ITEM_SETTINGS: ElementSettings = {
  name: 'List Item',
  code: 'list-item',
  aliases: ['li'],
  canBeSearched: false,
  allowedModifications: Array.from(ALL_LEAF_MODIFICATIONS),
  allowedTransformations: [],
}
