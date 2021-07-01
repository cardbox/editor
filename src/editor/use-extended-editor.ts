import { useMemo } from 'react'
import { createEditor, Text } from 'slate'
import { withHistory } from 'slate-history'
import { withReact } from 'slate-react'
import {
  createListItemElement,
  createOrderedListElement,
  createParagraphElement,
  createUnorderedListElement,
} from './elements'
import { createCodeElement } from './elements/elements/code'
import { extensions } from './features/extensions'
import { extend, Extension } from './lib/extensions/extend'

const defaultExtensions: Extension[] = [
  withReact,
  withHistory,
  extensions.listNormalization,
  extensions.format([
    {
      trigger: ' ',
      keepTrigger: false,
      markupType: 'after',
      markup: ['-'],
      onlyOnBlockStart: true,
      transformType: 'block',
      transform: ({ block }) => {
        const initialLeafs = (block.children as unknown[]).filter(Text.isText)
        if (initialLeafs.length === 0) return createUnorderedListElement()
        return createUnorderedListElement([
          createListItemElement([createParagraphElement(initialLeafs)]),
        ])
      },
    },
    {
      trigger: ' ',
      keepTrigger: false,
      markupType: 'after',
      markup: ['1.', '1)'],
      onlyOnBlockStart: true,
      transformType: 'block',
      transform: ({ block }) => {
        const initialLeafs = (block.children as unknown[]).filter(Text.isText)
        if (initialLeafs.length === 0) return createOrderedListElement()
        return createOrderedListElement([
          createListItemElement([createParagraphElement(initialLeafs)]),
        ])
      },
    },
    {
      trigger: ' ',
      keepTrigger: false,
      markupType: 'after',
      markup: ['```'],
      onlyOnBlockStart: true,
      transformType: 'block',
      transform: () => {
        return createCodeElement()
      },
    },
  ]),
]

export function useExtendedEditor(customExtensions: Extension[]) {
  return useMemo(() => {
    const finalExtensions = [...defaultExtensions, ...customExtensions]

    const editor = createEditor()
    return extend(editor, finalExtensions)
  }, [extensions])
}
