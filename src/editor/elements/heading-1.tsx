import React from 'react'
import { RenderElementProps } from 'slate-react'
import { LeafElement } from '../leaf/types'
import styles from './heading-1.module.css'

export interface Heading1Element {
  type: 'heading-1'
  children: LeafElement[]
}

export const createHeading1Component = (text = ''): Heading1Element => ({
  type: 'heading-1',
  children: [{ text }],
})

export const Heading1Component = ({
  attributes,
  children,
}: RenderElementProps) => {
  return (
    <h1 className={styles.heading} {...attributes}>
      {children}
    </h1>
  )
}
