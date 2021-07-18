import { SettingsRegistry } from '../../../registries/settings'
import { CODE_MODIFICATION } from '../../../shared/constants'
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

SettingsRegistry.set('code-line', {
  type: 'code-line',
  name: 'Code Line',
  code: 'code-line',
  allowedModifications: [CODE_MODIFICATION],
  allowedTransformations: [],
  create: createCodeLineElement,
  canBeAdded: false,
})
