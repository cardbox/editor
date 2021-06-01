import clsx from 'clsx'
import React from 'react'
import { RenderLeafProps } from 'slate-react'
import classes from './index.module.css'

export interface LeafElement {
  text: string
  bold?: boolean
  italic?: boolean
  underlined?: boolean
  inlineCode?: boolean
}

export const LEAF_MODIFICATIONS = [
  'bold',
  'italic',
  'underlined',
  'inlineCode',
] as const
export type LeafModification = typeof LEAF_MODIFICATIONS[number]

export function createLeaf(
  text: string,
  modifications: Partial<Record<LeafModification, boolean>> = {}
): LeafElement {
  return {
    text,
    ...modifications,
  }
}

const LeafComponent = ({ attributes, children, leaf }: RenderLeafProps) => {
  const {
    bold = false,
    italic = false,
    underlined = false,
    inlineCode = false,
  } = leaf

  const classNames = clsx({
    [classes.bold]: bold,
    [classes.italic]: italic,
    [classes.underlined]: underlined,
    [classes.inlineCode]: inlineCode,
  })

  if (inlineCode)
    return (
      <code className={classNames} {...attributes}>
        {children}
      </code>
    )

  return (
    <span className={classNames} {...attributes}>
      {children}
    </span>
  )
}

export function renderLeaf(props: RenderLeafProps) {
  return <LeafComponent {...props} />
}
