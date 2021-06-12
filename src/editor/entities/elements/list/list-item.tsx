import React from 'react'
import { RenderElementProps } from 'slate-react'
import { LeafElement, LEAF_MODIFICATIONS } from '../../leaf/types'
import { ElementSettings } from '../types'
import styles from './index.module.css'
import { createListItemContentElement } from './list-item-content'
import { ListItemElement } from './types'

export const createListItemElement = (
  children: LeafElement[] = [{ text: '' }]
): ListItemElement => ({
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
  allowedModifications: Array.from(LEAF_MODIFICATIONS),
  allowedTransformations: [],
}
