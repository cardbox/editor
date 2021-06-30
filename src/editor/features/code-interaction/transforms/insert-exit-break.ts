import { Editor, Path, Range, Transforms } from 'slate'
import { GlobalMatchers } from '../../../lib/global-matchers'
import { GlobalQueries } from '../../../lib/global-queries'

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

  Transforms.splitNodes(editor, {
    match: GlobalMatchers.equals(editor, lineNode),
    always: true,
  })

  Transforms.select(editor, Path.next(linePath))
  Transforms.collapse(editor, { edge: 'start' })

  return handled
}
