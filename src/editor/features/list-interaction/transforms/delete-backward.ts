import { Editor, Range } from 'slate'
import { ListItemContentElement } from '../../../elements/list/types'
import { GlobalQueries } from '../../../lib/global-queries'
import { outdent } from './outdent'

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

  const contentEntry = GlobalQueries.getAbove<ListItemContentElement>(editor, {
    type: 'block',
    mode: 'lowest',
    match: (block) => block.type === 'list-item-content',
  })

  if (!contentEntry) {
    return skipped
  }

  const [, contentPath] = contentEntry

  const [isStart] = GlobalQueries.isOnEdges(editor, { of: contentPath })

  if (!isStart) {
    return skipped
  }

  outdent(editor)
  return handled
}
