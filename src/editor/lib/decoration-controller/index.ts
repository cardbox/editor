import { Editor, Node, NodeEntry, Range } from 'slate'

export type Decorator = (editor: Editor, entry: NodeEntry<Node>) => Range[]

export function createDecorationController() {
  const decorators: Decorator[] = []

  const register = (decorator: Decorator) => {
    decorators.push(decorator)
  }

  const createHandler = (editor: Editor) => (entry: NodeEntry<Node>) => {
    for (const decorator of decorators) {
      const decorationResult = decorator(editor, entry)
      if (decorationResult.length === 0) continue
      return decorationResult
    }

    return []
  }

  return {
    register,
    createHandler,
  }
}
