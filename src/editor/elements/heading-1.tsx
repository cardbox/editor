import { nanoid } from 'nanoid'
import React from 'react'
import { RenderElementProps } from 'slate-react'
import { ElementSettings } from '../types'
import styles from './heading-1.module.css'
import { Heading1Element } from './heading-1.types'

export const createHeading1Element = (text = ''): Heading1Element => ({
  id: nanoid(),
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

export const HEADING_1_SETTINGS: ElementSettings = {
  name: 'Heading-1',
  code: 'heading-1',
  aliases: ['h1', 'title'],
  allowedModifications: [],
  allowedTransformations: ['paragraph'],
}
