import { Editor, Element, Path } from 'slate'
import { GlobalMatchers } from '../../lib/global-matchers'

export function listNormalization(editor: Editor): Editor {
  const { normalizeNode } = editor

  const isList = GlobalMatchers.block(editor, [
    'ordered-list',
    'unordered-list',
  ])

  const isItem = GlobalMatchers.block(editor, 'list-item')

  function normalizeList(element: Element, path: Path) {
    // const hasItems = element.children.some(isItem)
    // if (hasItems) return
    // Transforms.removeNodes(editor, { at: path })
    // const iterator = Node.children(element, path, { reverse: true })
    // for (const [child, childPath] of iterator) {
    //   if (isItem(child)) continue
    //   Transforms.removeNodes(editor, { at: childPath })
    // }
  }

  function normalizeItem(element: Element, path: Path) {
    // console.log(element, path)
    // const iterator = Node.children(element, path, { reverse: true })
    // for (const [child, childPath] of iterator) {
    //   if (isContent(child) || isList(child)) continue
    //   Transforms.removeNodes(editor, { at: childPath })
    // }
    // for (const [child, childPath] of Node.children(element, path)) {
    //   if (isContent(child) || isList(child)) {
    //     continue
    //   }
    //   Transforms.setNodes(
    //     editor,
    //     { type: 'list-item-content' },
    //     {
    //       at: childPath,
    //     }
    //   )
    //   console.log(child)
    //   editor.normalizeNode([child, childPath])
    // }
  }

  editor.normalizeNode = (entry) => {
    const [node, path] = entry

    if (isItem(node)) normalizeItem(node, path)
    if (isList(node)) normalizeList(node, path)

    return normalizeNode(entry)
  }

  return editor
}
