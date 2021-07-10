import { GlobalMatchers } from '../../../lib/global-matchers'
import { LocalQueries } from '../queries'
import { FullInfo } from '../queries/info'
import { mergeSiblings } from './merge-siblings'
import { moveChildren } from './move-children'
import { Editor, Location, Node, Path, Range, Transforms } from 'slate'

interface Options {
  at?: Location
}

export function outdent(editor: Editor, options: Options = {}) {
  const { at = editor.selection } = options
  if (!at) return

  if (Range.isRange(at) && Range.isExpanded(at)) return

  const info = LocalQueries.info(editor, { at })
  if (!info) return

  if (!info.lists.above || !info.items.above) {
    return outdentFirstLevel(editor, options, info)
  }

  function isWrapperAbove(node: Node) {
    if (!info) return false
    const isCurrentList = node === info.lists.current.node
    const isItemAbove = node === info.items.above?.node
    return isCurrentList || isItemAbove
  }

  if (info.lists.current.node.children.length === 1) {
    Transforms.unwrapNodes(editor, {
      at: info.items.current.path,
      mode: 'all',
      split: true,
      match: isWrapperAbove,
    })

    return
  }

  moveChildren(editor, {
    parent: info.lists.current,
    match: (_, index) => index > info.items.current.meta.index,
    to: info.items.current.path.concat(info.items.current.node.children.length),
    transform(nodes) {
      return {
        type: info.lists.current.node.type,
        children: nodes,
      }
    },
  })

  mergeSiblings(editor, { at: info.items.current.path })

  if (info.items.current.meta.isFirst) {
    const newInfo = LocalQueries.info(editor, { at })
    if (!newInfo) return
    if (!newInfo.items.above) return

    Transforms.unwrapNodes(editor, {
      at: newInfo.items.current.path,
      mode: 'all',
      split: true,
      match: GlobalMatchers.equals(editor, [
        newInfo.lists.current.node,
        newInfo.items.above.node,
      ]),
    })
  } else {
    Transforms.moveNodes(editor, {
      at: info.items.current.path,
      to: Path.next(info.items.above.path),
    })
  }

  mergeSiblings(editor, { at: info.lists.above.path })
}

function outdentFirstLevel(
  editor: Editor,
  options: Options = {},
  info: FullInfo
) {
  const { at = editor.selection } = options
  if (!at) return

  Transforms.unwrapNodes(editor, {
    at: info.items.current.path,
    mode: 'all',
    split: true,
    match: GlobalMatchers.equals(editor, [
      info.lists.current.node,
      info.items.current.node,
    ]),
  })

  mergeSiblings(editor)

  // const isSimple = info.items.current.meta.isSimple
  // const hasListInside = info.blocks.second?.meta.isList

  // const pathRefs = {
  //   items: {
  //     current: Editor.pathRef(editor, info.items.current.path),
  //   },
  // }

  // if (!info.items.current.meta.isFirst)
  //   Transforms.splitNodes(editor, {
  //     at: info.items.current.path,
  //     match: GlobalMatchers.equals(editor, info.lists.current.node),
  //   })

  // if (isSimple && hasListInside) {
  //   if (!info.blocks.second) return

  //   moveChildren(editor, {
  //     parent: info.blocks.second,
  //     to:
  //   })
  // }
}
