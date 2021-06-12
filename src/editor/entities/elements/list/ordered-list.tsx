import React from 'react'
import { RenderElementProps } from 'slate-react'
import { LeafElement, LEAF_MODIFICATIONS } from '../../leaf/types'
import { ElementSettings } from '../types'
import styles from './index.module.css'
import { createListItemElement } from './list-item'
import { OrderedListElement } from './types'

export const createOrderedListElement = (
  children: LeafElement[] = [{ text: '' }]
): OrderedListElement => ({
  type: 'ordered-list',
  children: [createListItemElement(children)],
})

export const OrderedListComponent = ({
  attributes,
  children,
}: RenderElementProps) => {
  return (
    <ol className={styles.orderedList} {...attributes}>
      {children}
    </ol>
  )
}

export const ORDERED_LIST_SETTINGS: ElementSettings = {
  name: 'Ordered List',
  code: 'ordered-list',
  aliases: ['ol'],
  allowedModifications: Array.from(LEAF_MODIFICATIONS),
  allowedTransformations: [],
}
