import { nanoid } from 'nanoid'
import React from 'react'
import { RenderElementProps } from 'slate-react'
import { LeafElement, LEAF_MODIFICATIONS } from '../../leaf/types'
import { ElementSettings } from '../types'
import styles from './index.module.css'
import { ListItemContentElement } from './types'

export const createListItemContentElement = (
  children: LeafElement[] = [{ text: '' }]
): ListItemContentElement => ({
  id: nanoid(),
  type: 'list-item-content',
  children,
})

export const ListItemContentComponent = ({
  attributes,
  children,
}: RenderElementProps) => {
  return (
    <div className={styles.listItemContent} {...attributes}>
      {children}
    </div>
  )
}

export const LIST_ITEM_CONTENT_SETTINGS: ElementSettings = {
  name: 'List Item Content',
  code: 'list-item-content',
  aliases: ['lic'],
  canBeSearched: false,
  allowedModifications: Array.from(LEAF_MODIFICATIONS),
  allowedTransformations: [],
}
