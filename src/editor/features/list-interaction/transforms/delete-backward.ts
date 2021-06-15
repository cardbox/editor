import { Editor, Range } from 'slate'
import { ListItemContentElement } from '../../../elements/list/types'
import { GlobalQueries } from '../../../lib/global-queries'
import { GlobalTransforms } from '../../../lib/global-transforms'
import { outdent } from './outdent'

export function deleteBackward(editor: Editor) {
  if (!editor.selection) return

  if (Range.isExpanded(editor.selection)) {
    GlobalTransforms.deleteBackward(editor)
    return
  }

  const contentEntry = GlobalQueries.getAbove<ListItemContentElement>(editor, {
    type: 'block',
    mode: 'lowest',
    match: (block) => block.type === 'list-item-content',
  })

  if (!contentEntry) return
  const [, contentPath] = contentEntry

  const [isStart] = GlobalQueries.isOnEdges(editor, { of: contentPath })

  if (!isStart) {
    GlobalTransforms.deleteBackward(editor)
    return
  }

  outdent(editor)
}
