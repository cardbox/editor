import { Editor, Element, Range, Transforms } from 'slate'
import { createListElement } from '../../../elements/list'
import { ListElement, ListItemElement } from '../../../elements/list/types'
import { GlobalQueries } from '../../../lib/global-queries'
import { mergeSiblings } from './merge-siblings'

export function indent(editor: Editor) {
  if (!editor.selection) return
  if (Range.isExpanded(editor.selection)) return

  const matchList = (block: Element) =>
    block.type === 'unordered-list' || block.type === 'ordered-list'

  const listEntry = GlobalQueries.getAbove<ListElement>(editor, {
    type: 'block',
    mode: 'lowest',
    match: matchList,
  })
  if (!listEntry) return
  const [list] = listEntry

  const itemEntry = GlobalQueries.getAbove<ListItemElement>(editor, {
    type: 'block',
    mode: 'lowest',
    match: (block) => block.type === 'list-item',
  })
  if (!itemEntry) return
  const [item, itemPath] = itemEntry

  const itemIsFirst = item === list.children[0]
  if (itemIsFirst) return

  const prevItemEntry = Editor.previous<ListItemElement>(editor, {
    at: itemPath,
    mode: 'lowest',
  })
  if (!prevItemEntry) return
  const [prevItem, prevItemPath] = prevItemEntry

  Transforms.wrapNodes(editor, createListElement(list.type, []), {
    at: itemPath,
  })
  Transforms.moveNodes(editor, {
    at: itemPath,
    to: prevItemPath.concat(prevItem.children.length),
  })
  mergeSiblings(editor, { at: prevItemPath })
}
