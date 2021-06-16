import { Editor, Path, Range, Transforms } from 'slate'
import { createListItemElement } from '../../../elements'
import { ListElement, ListItemElement } from '../../../elements/list/types'
import { GlobalMatchers } from '../../../lib/global-matchers'
import { GlobalQueries } from '../../../lib/global-queries'
import { outdent } from './outdent'

export function insertExitBreak(editor: Editor) {
  if (!editor.selection) return

  if (Range.isExpanded(editor.selection)) {
    Transforms.delete(editor, { at: editor.selection })
  }

  const listEntry = GlobalQueries.getAbove<ListElement>(editor, {
    type: 'block',
    mode: 'lowest',
    match: GlobalMatchers.block(editor, ['ordered-list', 'unordered-list']),
  })
  if (!listEntry) return
  const [list] = listEntry

  const matchItem = GlobalMatchers.block(editor, 'list-item')

  const listItemEntry = GlobalQueries.getAbove<ListItemElement>(editor, {
    type: 'block',
    mode: 'lowest',
    match: matchItem,
  })
  if (!listItemEntry) return
  const [item, listItemPath] = listItemEntry

  const [isStart, isEnd] = GlobalQueries.isOnEdges(editor, {
    of: listItemPath,
  })

  const isLastItem = item === list.children[list.children.length - 1]
  const hasListInside = item.children.length > 1
  const isEmpty = isStart && isEnd

  if (isEmpty && isLastItem && !hasListInside) {
    outdent(editor)
    return
  }

  if (isEnd) {
    Transforms.insertNodes(editor, createListItemElement(), {
      select: true,
      match: matchItem,
    })
    return
  }

  if (isStart) {
    Transforms.insertNodes(editor, createListItemElement(), {
      select: false,
      match: matchItem,
    })
    Transforms.select(
      editor,
      Editor.point(editor, Path.next(listItemPath), { edge: 'start' })
    )
    return
  }

  Transforms.splitNodes(editor, {
    mode: 'lowest',
    match: matchItem,
    always: true,
  })
}
