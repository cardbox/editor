import { Editor } from 'slate'
import { LeafElement } from '../../leaf/types'

export function clearHref(editor: Editor) {
  const marks = Editor.marks(editor)
  if (!marks) return

  const mark: keyof LeafElement = 'href'
  editor.removeMark(mark)
}
