import { GlobalQueries } from '../lib/global-queries'
import { TextModification } from '../shared/types'
import React, { ReactElement, ReactHTML } from 'react'
import { RenderLeafProps } from 'slate-react'

type ElementMapper = Record<TextModification, keyof ReactHTML>

const ELEMENT_MAPPER: ElementMapper = {
  bold: 'b',
  italic: 'em',
  underlined: 'u',
  inlineCode: 'code',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isCodeEmptyLine(children: any): boolean {
  const props = children?.props
  return props?.text.text.length === 0 && props?.parent?.type === 'code-line'
}

function buildElement({ leaf, children, attributes }: RenderLeafProps) {
  // fix double empty line copying problem
  if (isCodeEmptyLine(children))
    return (
      <span data-slate-leaf="true">
        <span data-slate-zero-width="z" data-slate-length={0}>
          {'\uFEFF'}
        </span>
      </span>
    )

  if (leaf.prismToken)
    return (
      <span className={`token ${leaf.prismToken}`} {...attributes}>
        {children}
      </span>
    )

  const modifications = GlobalQueries.textModifications(leaf)

  let wrapped: ReactElement = children

  for (const modification of modifications) {
    const elementType = ELEMENT_MAPPER[modification]
    wrapped = React.createElement(elementType, null, wrapped)
  }

  if (leaf.href) {
    wrapped = (
      <a href={leaf.href} target="_blank">
        {wrapped}
      </a>
    )
  }

  if (wrapped === children) {
    // simple text
    wrapped = <span>{wrapped}</span>
  }

  return React.cloneElement(wrapped, attributes)
}

const LeafComponent = (props: RenderLeafProps) => {
  return buildElement(props)
}

export function renderLeaf({ children, ...rest }: RenderLeafProps) {
  return <LeafComponent {...rest}>{children}</LeafComponent>
}
