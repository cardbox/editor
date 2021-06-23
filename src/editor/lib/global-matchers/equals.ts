import { Editor, Node } from 'slate'

export function equals<T extends Node>(editor: Editor, node: T | T[]) {
  const nodes = Array.isArray(node) ? node : [node]
  return (another: Node): another is T => {
    // eslint-disable-next-line unicorn/prefer-includes
    return nodes.some((node) => node === another)
  }
}
