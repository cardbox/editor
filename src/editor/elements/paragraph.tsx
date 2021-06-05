import React from 'react'
import { RenderElementProps } from 'slate-react'
import { LeafElement } from '../leaf/types'
import styles from './paragraph.module.css'

export interface ParagraphElement {
  type: 'paragraph'
  children: LeafElement[]
}

export const createParagraphComponent = (text = ''): ParagraphElement => ({
  type: 'paragraph',
  children: [{ text }],
})

export const ParagraphComponent = ({
  attributes,
  children,
}: RenderElementProps) => {
  return (
    <p className={styles.paragraph} {...attributes}>
      {children}
    </p>
  )
}
