import { GlobalMatchers } from '../../../lib/global-matchers'
import { GlobalQueries } from '../../../lib/global-queries'
import { Editor, Path, Range, Transforms } from 'slate'

const INDENT_SIZE = 2

interface TransformResult {
  handled: boolean
}

export function insertExitBreak(editor: Editor): TransformResult {
  const handled: TransformResult = { handled: true }
  const skipped: TransformResult = { handled: false }

  if (!editor.selection) return handled

  if (Range.isExpanded(editor.selection)) {
    Transforms.delete(editor)
  }

  const line = GlobalQueries.getAbove(editor, {
    type: 'block',
    match: GlobalMatchers.block(editor, 'code-line'),
  })

  if (!line) return skipped
  const [lineNode, linePath] = line

  let offset = 0
  const text = Editor.string(editor, linePath)
  for (const char of text) {
    if (char !== ' ') break
    offset += 1
  }

  const start = Editor.start(editor, editor.selection)
  const previousChar = text[start.offset - 1]
  if (previousChar === '{') offset += INDENT_SIZE
  if (previousChar === '(') offset += INDENT_SIZE
  if (previousChar === '<') offset += INDENT_SIZE
  if (previousChar === ':') offset += INDENT_SIZE

  Transforms.splitNodes(editor, {
    match: GlobalMatchers.equals(editor, lineNode),
    always: true,
  })

  Transforms.select(editor, Path.next(linePath))
  Transforms.collapse(editor, { edge: 'start' })

  if (offset > 0) {
    const lineStart = Editor.start(editor, Path.next(linePath))
    Transforms.insertText(editor, ' '.repeat(offset), {
      at: lineStart,
    })
  }

  return handled
}
