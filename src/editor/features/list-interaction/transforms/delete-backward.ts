import { Editor, Element, Transforms } from 'slate'
import {
  ListElement,
  ListItemContentElement,
  ListItemElement,
} from '../../../elements/list/types'
import { GlobalQueries } from '../../../lib/global-queries'
import { mergeSiblings } from './merge-siblings'
import { outdent } from './outdent'

export function deleteBackward(editor: Editor) {
  if (!editor.selection) return

  const matchList = (block: Element) =>
    block.type === 'unordered-list' || block.type === 'ordered-list'

  const listEntry = GlobalQueries.getAbove<ListElement>(editor, {
    type: 'block',
    mode: 'lowest',
    match: matchList,
  })

  const itemEntry = GlobalQueries.getAbove<ListItemElement>(editor, {
    type: 'block',
    mode: 'lowest',
    match: (block) => block.type === 'list-item',
  })

  const contentEntry = GlobalQueries.getAbove<ListItemContentElement>(editor, {
    type: 'block',
    mode: 'lowest',
    match: (block) => block.type === 'list-item-content',
  })

  if (!listEntry) return
  if (!itemEntry) return
  if (!contentEntry) return

  const listAboveEntry = GlobalQueries.getAbove<ListElement>(editor, {
    type: 'block',
    match: (block) => matchList(block) && block !== listEntry[0],
  })

  const [list, listPath] = listEntry
  const [item, itemPath] = itemEntry
  const [content, contentPath] = contentEntry

  const contentText = Editor.string(editor, contentPath)
  const contentIsEmpty = contentText.length === 0
  const itemIsFirst = item === list.children[0]
  const listIsNested = Boolean(listAboveEntry)

  const [isStart] = GlobalQueries.isOnEdges(editor, { of: contentPath })

  if (isStart && listIsNested) {
    outdent(editor)
    return
  }

  if (isStart && itemIsFirst && !listIsNested) {
    Transforms.setNodes(editor, { type: 'paragraph' }, { at: contentPath })
    Transforms.moveNodes(editor, { at: itemPath, to: listPath })
    Transforms.unwrapNodes(editor, { at: listPath })
    mergeSiblings(editor)
    return
  }

  if (isStart && !itemIsFirst) {
    Transforms.delete(editor, { at: contentPath })
    Transforms.mergeNodes(editor, { at: itemPath })
    const prevSelection = GlobalQueries.getPointFromLocation(editor.selection)
    if (!prevSelection) return
    Transforms.insertNodes(editor, content.children)
    Transforms.select(editor, prevSelection)
    mergeSiblings(editor, { at: listPath })
    return
  }

  if (contentIsEmpty) {
    Transforms.delete(editor, { at: contentPath })
    Transforms.mergeNodes(editor, { at: itemPath })
    mergeSiblings(editor, { at: listPath })
    return
  }

  editor.deleteBackward('character')
}
