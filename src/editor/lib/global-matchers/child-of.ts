import { Editor, Element, Node } from 'slate'

export function childOf(editor: Editor, element: Element) {
  return (node: Node): boolean => {
    if (Editor.isEditor(node)) return false
    return (element.children as unknown[]).includes(node)
  }
}
