import { Editor, Element, Path, Range, Transforms } from 'slate'
import { ListElement, ListItemElement } from '../../../elements/list/types'
import { GlobalQueries } from '../../../lib/global-queries'
import { mergeSiblings } from './merge-siblings'

export function outdent(editor: Editor) {
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
  const [list, listPath] = listEntry

  const itemEntry = GlobalQueries.getAbove<ListItemElement>(editor, {
    type: 'block',
    mode: 'lowest',
    match: (block) => block.type === 'list-item',
  })
  if (!itemEntry) return
  const [item, itemPath] = itemEntry

  const itemAboveEntry = GlobalQueries.getAbove<ListItemElement>(editor, {
    type: 'block',
    mode: 'lowest',
    match: (block) => block.type === 'list-item' && block !== item,
  })
  if (!itemAboveEntry) return
  const [, itemAbovePath] = itemAboveEntry

  const nextItemEntry = Editor.next(editor, { at: itemPath })

  const isFirstItem = item === list.children[0]
  const isLastItem = list.children.length === 1

  if (nextItemEntry) {
    const [, nextItemPath] = nextItemEntry
    Transforms.splitNodes(editor, {
      at: nextItemPath,
      mode: 'lowest',
      match: (element) => Editor.isBlock(editor, element) && matchList(element),
    })
    const bottomListPath = Path.next(Path.parent(nextItemPath))
    Transforms.moveNodes(editor, {
      at: bottomListPath,
      to: itemPath.concat(item.children.length),
    })
  }

  Transforms.moveNodes(editor, {
    at: itemPath,
    to: Path.next(itemAbovePath),
  })

  if (isFirstItem || isLastItem) {
    Transforms.removeNodes(editor, { at: listPath })
  }

  mergeSiblings(editor)
}
