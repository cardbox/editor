import { Element } from 'slate'
import { ReactEditor } from 'slate-react'
import { useEditor } from './use-editor'

export function usePath(element: Element) {
  const editor = useEditor()
  return ReactEditor.findPath(editor, element)
}
