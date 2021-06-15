import { Editor, Location, Path, Range, Transforms } from 'slate'
import { ListElement, ListItemElement } from '../../../elements/list/types'
import { GlobalMatchers } from '../../../lib/global-matchers'
import { GlobalQueries } from '../../../lib/global-queries'
import { mergeSiblings } from './merge-siblings'

interface Options {
  at?: Location
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export function outdent(editor: Editor, options: Options = {}) {
  const { at = editor.selection } = options
  if (!at) return

  if (Range.isRange(at) && Range.isExpanded(at)) return

  const isList = GlobalMatchers.block(editor, [
    'ordered-list',
    'unordered-list',
  ])

  const listEntry = GlobalQueries.getAbove<ListElement>(editor, {
    at,
    type: 'block',
    mode: 'lowest',
    match: isList,
  })
  if (!listEntry) return
  const [list, listPath] = listEntry

  const itemEntry = GlobalQueries.getAbove<ListItemElement>(editor, {
    at,
    type: 'block',
    mode: 'lowest',
    match: GlobalMatchers.block(editor, 'list-item'),
  })
  if (!itemEntry) return
  const [item, itemPath] = itemEntry

  const itemAboveEntry = GlobalQueries.getAbove<ListItemElement>(editor, {
    at,
    type: 'block',
    mode: 'lowest',
    match: GlobalMatchers.builder(editor)
      .block('list-item')
      .notEquals(item)
      .compile(),
  })

  if (!itemAboveEntry) {
    const hasListInside = item.children.length > 1

    if (hasListInside) {
      const listInside = item.children[1]
      for (let i = listInside.children.length - 1; i >= 0; i--) {
        outdent(editor, { at: itemPath.concat([1, i, 0]) })
      }
    }

    Transforms.setNodes(
      editor,
      { type: 'paragraph' },
      { at: itemPath.concat(0) }
    )
    Transforms.unwrapNodes(editor, {
      at: itemPath.concat(0),
      mode: 'lowest',
      match: GlobalMatchers.block(editor, 'list-item'),
    })
    Transforms.unwrapNodes(editor, {
      at: itemPath,
      mode: 'lowest',
      match: GlobalMatchers.block(editor, ['ordered-list', 'unordered-list']),
      split: true,
    })

    mergeSiblings(editor)
    return
  }

  const [, itemAbovePath] = itemAboveEntry

  const nextItemEntry = Editor.next(editor, { at: itemPath })

  const isFirstItem = item === list.children[0]
  const isLastItem = list.children.length === 1

  if (nextItemEntry) {
    const [, nextItemPath] = nextItemEntry
    Transforms.splitNodes(editor, {
      at: nextItemPath,
      mode: 'lowest',
      match: isList,
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
