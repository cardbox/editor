import { ElementSettings } from '../../../types'
import { CodeLineElement } from './types'
import React from 'react'
import { Text } from 'slate'
import { RenderElementProps } from 'slate-react'

export const createCodeLineElement = (
  children: Text[] = [{ text: '' }]
): CodeLineElement => ({
  type: 'code-line',
  children,
})

export const CodeLineComponent = ({
  attributes,
  children,
}: RenderElementProps) => {
  return <div {...attributes}>{children}</div>
}

export const CODE_LINE_SETTINGS: ElementSettings = {
  type: 'code-line',
  name: 'Code Line',
  code: 'code-line',
  allowedModifications: [],
  allowedTransformations: [],
  create: createCodeLineElement,
  canBeAdded: false,
}
