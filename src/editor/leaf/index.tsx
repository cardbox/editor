import React from 'react'
import { RenderLeafProps } from 'slate-react'
import { Queries } from '../common/queries'
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
  const modifications = Queries.leafModifications(leaf)

  const wrapped = modifications.reduce((acc, modification, index) => {
    const elementType = ELEMENT_MAPPER[modification]
    const props = index === modifications.length - 1 ? attributes : {}
    return React.createElement(elementType, props, acc)
  }, children)

  if (modifications.length === 0) {
    return <span {...attributes}>{wrapped}</span>
  }

  if (leaf.href) {
    return (
      <a href={leaf.href} target="_blank" {...attributes}>
        {wrapped}
      </a>
    )
  }

  return wrapped
}

const LeafComponent = (props: RenderLeafProps) => {
  return buildElement(props)
}

export function renderLeaf(props: RenderLeafProps) {
  return <LeafComponent {...props} />
}
