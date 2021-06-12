import { useMemo } from 'react'
import { createEditor, Text } from 'slate'
import { withHistory } from 'slate-history'
import { withReact } from 'slate-react'
import {
  createOrderedListElement,
  createUnorderedListElement,
} from './entities/elements'
import { extensions } from './features/extensions'
import { extend, Extension } from './lib/extensions/extend'

const defaultExtensions: Extension[] = [
  withReact,
  withHistory,
  extensions.format([
    {
      trigger: ' ',
      keepTrigger: false,
      markupType: 'after',
      markup: ['-'],
      onlyOnBlockStart: true,
      transformType: 'block',
      transform: ({ block }) => {
        const children = (block.children as unknown[]).filter(Text.isText)
        if (children.length === 0) return createUnorderedListElement()
        return createUnorderedListElement(children)
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
        const children = (block.children as unknown[]).filter(Text.isText)
        if (children.length === 0) return createOrderedListElement()
        return createOrderedListElement(children)
      },
    },
    // {
    //   trigger: '`',
    //   markupType: 'between',
    //   markup: ['`', '`'],
    //   transformType: 'leaf',
    //   transform: ({ leaf, text }) => ({ ...leaf, text, inlineCode: true }),
    //   skip: ({ leaf }) => Queries.leafHasModifications(leaf, ['inlineCode']),
    // },
    // {
    //   trigger: '*',
    //   markupType: 'between',
    //   markup: ['**', '**'],
    //   transformType: 'leaf',
    //   transform: ({ leaf, text }) => ({ ...leaf, text, bold: true }),
    //   skip: ({ leaf }) => Queries.leafHasModifications(leaf, ['bold']),
    // },
    // {
    //   trigger: '_',
    //   markupType: 'between',
    //   markup: ['__', '__'],
    //   transformType: 'leaf',
    //   transform: ({ leaf, text }) => ({ ...leaf, text, italic: true }),
    //   skip: ({ leaf }) => Queries.leafHasModifications(leaf, ['italic']),
    // },
  ]),
]

export function useExtendedEditor(customExtensions: Extension[]) {
  return useMemo(() => {
    const finalExtensions = [...defaultExtensions, ...customExtensions]

    const editor = createEditor()
    return extend(editor, finalExtensions)
  }, [extensions])
}
