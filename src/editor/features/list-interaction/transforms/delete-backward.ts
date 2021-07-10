import { GlobalMatchers } from '../../../lib/global-matchers'
import { GlobalQueries } from '../../../lib/global-queries'
import { outdent } from './outdent'
import { Editor, Range } from 'slate'

interface TransformResult {
  handled: boolean
}

export function deleteBackward(editor: Editor): TransformResult {
  const handled: TransformResult = { handled: true }
  const skipped: TransformResult = { handled: false }

  if (!editor.selection) {
    return skipped
  }

  if (Range.isExpanded(editor.selection)) {
    return skipped
  }

  const itemEntry = GlobalQueries.getAbove(editor, {
    type: 'block',
    mode: 'lowest',
    match: GlobalMatchers.block(editor, 'list-item'),
  })
  if (!itemEntry) return skipped
  const [, itemPath] = itemEntry

  const [isStart] = GlobalQueries.isOnEdges(editor, { of: itemPath })

  if (!isStart) {
    return skipped
  }

  outdent(editor)
  return handled
}
