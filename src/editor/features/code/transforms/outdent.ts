import { GlobalMatchers } from '../../../lib/global-matchers'
import { Editor, Node, Point, Transforms } from 'slate'

const INDENT_SIZE = 2

export function outdent(editor: Editor) {
  const lineEntries = Editor.nodes(editor, {
    match: GlobalMatchers.block(editor, 'code-line'),
  })

  for (const [, linePath] of lineEntries) {
    const start = Editor.start(editor, linePath)
    const [node] = Editor.node(editor, start)
    const text = Node.string(node)

    let offset = start.offset
    let removed = 0

    for (const char of text) {
      if (char !== ' ') break
      offset += 1
      removed += 1
      if (removed === INDENT_SIZE) break
    }

    if (removed === 0) continue
    const end: Point = { path: start.path, offset }
    const range = Editor.range(editor, start, end)
    Transforms.delete(editor, { at: range })
  }
}
