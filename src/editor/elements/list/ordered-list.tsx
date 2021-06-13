import { nanoid } from 'nanoid'
import React from 'react'
import { Text } from 'slate'
import { RenderElementProps } from 'slate-react'
import { ALL_LEAF_MODIFICATIONS } from '../../constants'
import { ElementSettings } from '../../types'
import styles from './index.module.css'
import { createListItemElement } from './list-item'
import { OrderedListElement } from './types'

export const createOrderedListElement = (
  children: Text[] = [{ text: '' }]
): OrderedListElement => ({
  id: nanoid(),
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
  allowedModifications: Array.from(ALL_LEAF_MODIFICATIONS),
  allowedTransformations: [],
}
