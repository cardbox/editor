import React from 'react'

export interface LeafElement {
  text: string
  bold?: boolean
  italic?: boolean
  underlined?: boolean
  inlineCode?: boolean
  href?: string
}

export const LEAF_MODIFICATIONS = [
  'bold',
  'italic',
  'underlined',
  'inlineCode',
] as const
export type LeafModification = typeof LEAF_MODIFICATIONS[number]

export type ElementMapper = Record<LeafModification, keyof React.ReactHTML>
