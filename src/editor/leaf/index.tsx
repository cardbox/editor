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
