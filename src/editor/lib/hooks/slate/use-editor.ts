import { EditorContext } from '../../editor-context'
import { useContext } from 'react'

export function useEditor() {
  return useContext(EditorContext)
}
