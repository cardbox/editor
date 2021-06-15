import { Editor, Element, Node } from 'slate'
import { ElementType } from '../../types'

export function block(editor: Editor, type?: ElementType | ElementType[]) {
  return (node: Node): node is Element => {
    if (!Editor.isBlock(editor, node)) return false
    if (!type) return true
    const array = Array.isArray(type) ? type : [type]
    return array.includes(node.type)
  }
}
