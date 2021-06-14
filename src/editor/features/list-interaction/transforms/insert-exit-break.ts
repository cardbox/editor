import { Editor, Node, Path, Range, Transforms } from 'slate'
import { createListItemElement } from '../../../elements'
import { ListItemElement } from '../../../elements/list/types'
import { GlobalQueries } from '../../../lib/global-queries'

export function insertExitBreak(editor: Editor) {
  if (!editor.selection) return

  if (Range.isExpanded(editor.selection)) {
    Transforms.delete(editor, { at: editor.selection })
  }

  const listItemEntry = GlobalQueries.getAbove<ListItemElement>(editor, {
    type: 'block',
    mode: 'lowest',
    match: (block) => block.type === 'list-item',
  })
  if (!listItemEntry) return

  const [, listItemPath] = listItemEntry

  const matchListItem = (element: Node) => {
    if (!Editor.isBlock(editor, element)) return false
    return element.type === 'list-item'
  }

  const [isStart, isEnd] = GlobalQueries.isOnEdges(editor, {
    of: listItemPath,
  })

  if (isEnd) {
    Transforms.insertNodes(editor, createListItemElement(), {
      select: true,
      match: matchListItem,
    })
    return
  }

  if (isStart) {
    Transforms.insertNodes(editor, createListItemElement(), {
      select: false,
      match: matchListItem,
    })
    Transforms.select(
      editor,
      Editor.point(editor, Path.next(listItemPath), { edge: 'start' })
    )
    return
  }

  Transforms.splitNodes(editor, {
    mode: 'lowest',
    match: matchListItem,
    always: true,
  })
}
