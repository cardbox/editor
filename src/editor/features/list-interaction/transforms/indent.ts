import { Editor, Location, Range, Transforms } from 'slate'
import { createListElement } from '../../../elements/list'
import { ListElement, ListItemElement } from '../../../elements/list/types'
import { GlobalMatchers } from '../../../lib/global-matchers'
import { GlobalQueries } from '../../../lib/global-queries'
import { mergeSiblings } from './merge-siblings'

interface Options {
  at?: Location
}

export function indent(editor: Editor, options: Options = {}) {
  const { at = editor.selection } = options
  if (!at) return

  if (Range.isRange(at) && Range.isExpanded(at)) return

  const listEntry = GlobalQueries.getAbove<ListElement>(editor, {
    at,
    type: 'block',
    mode: 'lowest',
    match: GlobalMatchers.block(editor, ['ordered-list', 'unordered-list']),
  })
  if (!listEntry) return
  const [list] = listEntry

  const itemEntry = GlobalQueries.getAbove<ListItemElement>(editor, {
    at,
    type: 'block',
    mode: 'lowest',
    match: GlobalMatchers.block(editor, 'list-item'),
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
