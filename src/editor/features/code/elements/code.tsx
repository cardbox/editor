import { SettingsRegistry } from '../../../settings-registry'
import { CODE_MODIFICATION } from '../../../shared/constants'
import { createCodeLineElement } from './code-line'
import { CodeElement, CodeLineElement } from './types'
import React from 'react'
import { RenderElementProps } from 'slate-react'

export const createCodeElement = (
  language = 'tsx',
  children: CodeLineElement[] = [createCodeLineElement()]
): CodeElement => ({
  type: 'code',
  children,
  language,
})

export const CodeComponent = ({
  element,
  attributes,
  children,
}: RenderElementProps) => {
  if (element.type !== 'code') return <></>

  return (
    <pre data-language={element.language} spellCheck={false} {...attributes}>
      {children}
    </pre>
  )
}

SettingsRegistry.set('code', {
  type: 'code',
  name: 'Code',
  code: 'code',
  aliases: ['pre'],
  allowedModifications: [CODE_MODIFICATION],
  allowedTransformations: [],
  create: createCodeElement,
})
