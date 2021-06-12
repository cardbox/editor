import React from 'react'
import { RenderElementProps } from 'slate-react'
import { LEAF_MODIFICATIONS } from '../leaf/types'
import styles from './paragraph.module.css'
import { ParagraphElement } from './paragraph.types'
import { ElementSettings } from './types'

export const createParagraphElement = (text = ''): ParagraphElement => ({
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

export const PARAGRAPH_SETTINGS: ElementSettings = {
  name: 'Paragraph',
  code: 'paragraph',
  aliases: ['p', 'text'],
  allowedModifications: Array.from(LEAF_MODIFICATIONS),
  allowedTransformations: ['heading-1'],
}
