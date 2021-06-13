import React, { ReactElement } from 'react'
import { RenderLeafProps } from 'slate-react'
import { EditorQueries } from '../lib/editor-queries'
import { ElementMapper, LeafElement, LeafModification } from './types'

export function createLeaf({
  text,
  href,
  modifications = [],
}: {
  text: string
  href?: string
  modifications?: LeafModification[]
}): LeafElement {
  return modifications.reduce<LeafElement>(
    (leaf, modification) => {
      leaf[modification] = true
      return leaf
    },
    {
      text,
      href,
    }
  )
}

const ELEMENT_MAPPER: ElementMapper = {
  bold: 'b',
  italic: 'em',
  underlined: 'u',
  inlineCode: 'code',
}

function buildElement({ leaf, children, attributes }: RenderLeafProps) {
  const modifications = EditorQueries.leafModifications(leaf)

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

export function renderLeaf(props: RenderLeafProps) {
  return <LeafComponent {...props} />
}
