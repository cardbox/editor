import { useLayoutEffect, useRef } from 'react'
import { Editor } from 'slate'
import { ReactEditor } from 'slate-react'

export function useEditorNodeRef(editor: Editor) {
  const editorNodeRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const domNode = ReactEditor.toDOMNode(editor, editor)
    editorNodeRef.current = domNode
  }, [editor])

  return editorNodeRef
}
