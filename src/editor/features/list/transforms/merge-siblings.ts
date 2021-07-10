import { ElementType } from '../../../shared/types'
import { ListElement } from '../elements/types'
import { Editor, NodeEntry, Path, Transforms } from 'slate'

interface Options {
  at?: Path
}

function mergeSiblingsByType(
  editor: Editor,
  type: ElementType,
  options: Options = {}
) {
  const { at = [] } = options

  const iterator = Editor.nodes<ListElement>(editor, {
    at,
    match: (element) => {
      if (!Editor.isBlock(editor, element)) return false
      return element.type === type
    },
    /*
     * Merging in natural order can lead to wrong indexes usage
     */
    reverse: true,
  })

  const nodes = Array.from(iterator)
    // we need the same levels to be close to each other
    .sort((a, b) => a[1].length - b[1].length)

  let current: NodeEntry<ListElement> | null = null

  const isNextSibling = (prev: Path, next: Path) => {
    const nextAfterPrev = Path.next(prev)
    return Path.equals(nextAfterPrev, next)
  }

  for (const previous of nodes) {
    if (!current) {
      current = previous
      continue
    }

    const [, previousPath] = previous
    const [, currentPath] = current
    current = previous

    if (!isNextSibling(previousPath, currentPath)) {
      continue
    }

    Transforms.mergeNodes(editor, {
      at: currentPath,
    })
  }
}

export function mergeSiblings(editor: Editor, options: Options = {}) {
  mergeSiblingsByType(editor, 'ordered-list', options)
  mergeSiblingsByType(editor, 'unordered-list', options)
}
