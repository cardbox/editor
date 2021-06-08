import { Editor } from 'slate'
import { LeafElement } from '../../entities/leaf/types'

export function clearHref(editor: Editor) {
  const marks = Editor.marks(editor)
  if (!marks) return

  const mark: keyof LeafElement = 'href'
  editor.removeMark(mark)
}
