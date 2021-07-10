import { useEditor } from './use-editor'
import { Element } from 'slate'
import { ReactEditor } from 'slate-react'

export function usePath(element: Element) {
  const editor = useEditor()
  return ReactEditor.findPath(editor, element)
}
