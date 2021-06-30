import React from 'react'
import { RenderElementProps } from 'slate-react'
import { ElementSettings } from '../../../types'
import { createCodeLineElement } from './code-line'
import { CodeElement, CodeLineElement } from './types'

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

export const CODE_SETTINGS: ElementSettings = {
  type: 'code',
  name: 'Code',
  code: 'code',
  aliases: ['pre'],
  allowedModifications: [],
  allowedTransformations: [],
  create: createCodeElement,
}
