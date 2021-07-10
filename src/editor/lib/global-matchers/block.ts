import { ElementByType, ElementType } from '../../shared/types'
import { Editor, Node } from 'slate'

export function block<T extends ElementType>(editor: Editor, type?: T | T[]) {
  return (node: Node): node is ElementByType<T> => {
    if (!Editor.isBlock(editor, node)) return false
    if (!type) return true
    const array = Array.isArray(type) ? type : [type]
    return array.includes(node.type as T)
  }
}
