import { GlobalMatchers } from '../../../lib/global-matchers'
import { Editor, Transforms } from 'slate'

const INDENT_SIZE = 2
const INDENTATION = ' '.repeat(INDENT_SIZE)

export function indent(editor: Editor) {
  const lineEntries = Editor.nodes(editor, {
    match: GlobalMatchers.block(editor, 'code-line'),
  })

  for (const [, linePath] of lineEntries) {
    const start = Editor.start(editor, linePath)
    Transforms.insertText(editor, INDENTATION, { at: start })
  }
}
