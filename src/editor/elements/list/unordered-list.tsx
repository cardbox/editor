import { nanoid } from 'nanoid'
import React from 'react'
import { Text } from 'slate'
import { RenderElementProps } from 'slate-react'
import { ALL_LEAF_MODIFICATIONS } from '../../constants'
import { ElementSettings } from '../../types'
import styles from './index.module.css'
import { createListItemElement } from './list-item'
import { UnorderedListElement } from './types'

export const createUnorderedListElement = (
  children: Text[] = [{ text: '' }]
): UnorderedListElement => ({
  id: nanoid(),
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
  allowedModifications: Array.from(ALL_LEAF_MODIFICATIONS),
  allowedTransformations: [],
}
