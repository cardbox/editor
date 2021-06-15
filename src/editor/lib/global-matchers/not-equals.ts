import { Editor, Node } from 'slate'

export function notEquals(editor: Editor, node: Node) {
  return (another: Node): boolean => {
    return node !== another
  }
}
