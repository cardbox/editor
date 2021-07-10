import { GlobalMatchers } from '../../../lib/global-matchers'
import { ElementByType } from '../../../shared/types'
import { LocalQueries } from '../queries'
import { outdent } from './outdent'
import { Editor, Path, Range, Transforms } from 'slate'

interface TransformResult {
  handled: boolean
}

export function insertExitBreak(editor: Editor): TransformResult {
  const handled: TransformResult = { handled: true }
  const skipped: TransformResult = { handled: false }

  if (!editor.selection) return handled

  if (Range.isExpanded(editor.selection)) {
    Transforms.delete(editor)
  }

  const info = LocalQueries.info(editor)
  if (!info) return handled

  if (!info.items.current.meta.isSimple) {
    return skipped
  }

  if (info.blocks.current.meta.isEmpty) {
    outdent(editor)
    return handled
  }

  if (!info.blocks.first) return handled

  const listItemNode: ElementByType<'list-item'> = {
    type: 'list-item',
    children: [{ type: 'paragraph', children: [{ text: '' }] }],
  }

  if (info.blocks.first.meta.isOnStart) {
    if (info.items.previous?.meta.isEmpty) {
      return handled
    }

    Transforms.insertNodes(editor, listItemNode, {
      at: info.items.current.path,
    })

    return handled
  }

  if (info.blocks.first.meta.isOnEnd) {
    if (info.blocks.second) {
      Transforms.insertNodes(editor, listItemNode, {
        at: info.blocks.second.path.concat(0),
        select: true,
      })
    } else {
      Transforms.insertNodes(editor, listItemNode, {
        at: Path.next(info.items.current.path),
        select: true,
      })
    }

    return handled
  }

  Transforms.splitNodes(editor, {
    match: GlobalMatchers.equals(editor, info.items.current.node),
    always: true,
  })

  return handled
}
