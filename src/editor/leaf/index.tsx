import React from 'react'
import { RenderLeafProps } from 'slate-react'
import { Queries } from '../common/queries'
import { ElementMapper, LeafElement, LeafModification } from './types'

export function createLeaf(
  text: string,
  modifications: Partial<Record<LeafModification, boolean>> = {}
): LeafElement {
  return {
    text,
    ...modifications,
  }
}

const ELEMENT_MAPPER: ElementMapper = {
  bold: 'b',
  italic: 'em',
  underlined: 'u',
  inlineCode: 'code',
}

function buildElement({ leaf, children, attributes }: RenderLeafProps) {
  const hasModifications = Queries.leafHasModifications(leaf)

  if (!hasModifications) {
    return <span {...attributes}>{children}</span>
  }

  const modifications = Queries.leafModifications(leaf)

  return modifications.reduce((acc, modification, index) => {
    const elementType = ELEMENT_MAPPER[modification]
    const props = index === modifications.length - 1 ? attributes : {}
    return React.createElement(elementType, props, acc)
  }, children)
}

const LeafComponent = (props: RenderLeafProps) => {
  return buildElement(props)
}

export function renderLeaf(props: RenderLeafProps) {
  return <LeafComponent {...props} />
}
