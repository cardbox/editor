import { useContext } from 'react'
import { EditorContext } from '../../editor-context'

export function useEditor() {
  return useContext(EditorContext)
}
