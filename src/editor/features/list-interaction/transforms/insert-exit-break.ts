import { Editor, Path, Point, Range, Transforms } from 'slate'
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
  const [start, end] = Editor.edges(editor, listItemPath)

  const selectionPoint = GlobalQueries.getPointFromLocation(editor.selection)
  if (!selectionPoint) return

  if (Point.equals(selectionPoint, end)) {
    Transforms.insertNodes(editor, createListItemElement(), {
      select: true,
      match: (element) => {
        if (!Editor.isBlock(editor, element)) return false
        return element.type === 'list-item'
      },
    })
    return
  }

  if (Point.equals(selectionPoint, start)) {
    Transforms.insertNodes(editor, createListItemElement(), {
      select: false,
      match: (element) => {
        if (!Editor.isBlock(editor, element)) return false
        return element.type === 'list-item'
      },
    })
    Transforms.select(
      editor,
      Editor.point(editor, Path.next(listItemPath), { edge: 'start' })
    )
    return
  }

  Transforms.splitNodes(editor, {
    mode: 'lowest',
    match: (element) => {
      if (!Editor.isBlock(editor, element)) return false
      return element.type === 'list-item'
    },
  })
}
