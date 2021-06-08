import { Editor } from 'slate'
import { LeafElement } from '../../entities/leaf/types'

export function setHref(editor: Editor, href: string) {
  const marks = Editor.marks(editor)
  if (!marks) return

  const mark: keyof LeafElement = 'href'
  editor.addMark(mark, href)
}
