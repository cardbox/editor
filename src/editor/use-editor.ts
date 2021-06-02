import { useMemo } from 'react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { withReact } from 'slate-react'
import { Queries } from './common/queries'
import { extensions } from './extensions'
import { extend, Extension } from './lib/extensions/extend'

const defaultExtensions: Extension[] = [
  withReact,
  withHistory,
  extensions.format([
    {
      markupType: 'between',
      markup: ['`', '`'],
      transformType: 'leaf',
      transform: ({ leaf, text }) => ({ ...leaf, text, inlineCode: true }),
      skip: ({ leaf }) => Queries.leafHasModifications(leaf, ['inlineCode']),
    },
    {
      markupType: 'between',
      markup: ['**', '**'],
      transformType: 'leaf',
      transform: ({ leaf, text }) => ({ ...leaf, text, bold: true }),
      skip: ({ leaf }) => Queries.leafHasModifications(leaf, ['bold']),
    },
    {
      markupType: 'between',
      markup: ['__', '__'],
      transformType: 'leaf',
      transform: ({ leaf, text }) => ({ ...leaf, text, italic: true }),
      skip: ({ leaf }) => Queries.leafHasModifications(leaf, ['italic']),
    },
  ]),
]

export function useEditor(customExtensions: Extension[]) {
  return useMemo(() => {
    const finalExtensions = [...defaultExtensions, ...customExtensions]

    const editor = createEditor()
    return extend(editor, finalExtensions)
  }, [extensions])
}
