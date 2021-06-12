import React from 'react'
import { RenderElementProps } from 'slate-react'
import { LeafElement, LEAF_MODIFICATIONS } from '../../leaf/types'
import { ElementSettings } from '../types'
import styles from './index.module.css'
import { createListItemElement } from './list-item'
import { UnorderedListElement } from './types'

export const createUnorderedListElement = (
  children: LeafElement[] = [{ text: '' }]
): UnorderedListElement => ({
  type: 'unordered-list',
  children: [createListItemElement(children)],
})

export const UnorderedListComponent = ({
  attributes,
  children,
}: RenderElementProps) => {
  return (
    <ul className={styles.unorderedList} {...attributes}>
      {children}
    </ul>
  )
}

export const UNORDERED_LIST_SETTINGS: ElementSettings = {
  name: 'Unordered List',
  code: 'unordered-list',
  aliases: ['ul'],
  allowedModifications: Array.from(LEAF_MODIFICATIONS),
  allowedTransformations: [],
}
