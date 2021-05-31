import { useMemo } from 'react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { withReact } from 'slate-react'
import { extensions } from './extensions'
import { extend, Extension } from './lib/extensions/extend'

const defaultExtensions: Extension[] = [
  withReact,
  withHistory,
  extensions.format([
    {
      type: 'inline',
      between: ['`', '`'],
      to: 'inlineCode',
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
