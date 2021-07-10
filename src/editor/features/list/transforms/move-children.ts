import { GlobalMatchers } from '../../../lib/global-matchers'
import { Editor, Element, Node, Path, Transforms } from 'slate'

type ChildOf<T extends Element> = T['children'][number]

export function moveChildren<TParent extends Element>(
  editor: Editor,
  {
    parent,
    match = () => true,
    to: destination,
    transform = (items) => items,
    willRemoveParent = (moved) => moved === parent.node.children.length,
  }: {
    parent: {
      node: TParent
      path: Path
    }
    match?: (node: ChildOf<TParent>, index: number) => boolean
    to: Path
    transform?: (items: ChildOf<TParent>[]) => Node | Node[]
    willRemoveParent?: (moved: number) => boolean
  }
) {
  const destinationRef = Editor.pathRef(editor, destination)

  const indexByItem = new Map<ChildOf<TParent>, number>()

  for (const [index, item] of parent.node.children.entries()) {
    indexByItem.set(item, index)
  }

  type Children = typeof parent.node.children[number][]
  const children: Children = parent.node.children

  // take bottom items
  const itemsToMove = children.filter(match)
  const shouldRemoveParent = willRemoveParent(itemsToMove.length)

  if (itemsToMove.length > 0) {
    const isBlock = GlobalMatchers.block(editor)

    if (shouldRemoveParent) {
      Transforms.removeNodes(editor, { at: parent.path })
    } else {
      Transforms.removeNodes(editor, {
        at: parent.path,
        match(node) {
          if (!isBlock(node)) return false
          const index = indexByItem.get(node)
          if (typeof index !== 'number') return false
          return match(node, index)
        },
      })
    }

    if (!destinationRef.current) return

    Transforms.insertNodes(editor, transform(itemsToMove), {
      at: destinationRef.current,
    })
  }
}
