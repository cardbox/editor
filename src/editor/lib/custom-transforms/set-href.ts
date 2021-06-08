import { Editor, Range, Transforms } from 'slate'
import { LeafElement } from '../../entities/leaf/types'

interface Options {
  at?: Range | null
}

export function setHref(editor: Editor, href: string, options: Options = {}) {
  const { at = editor.selection } = options
  if (!at) return
  Transforms.select(editor, at)

  const marks = Editor.marks(editor)
  if (!marks) return

  const mark: keyof LeafElement = 'href'
  editor.addMark(mark, href)
  Transforms.collapse(editor, { edge: 'focus' })
}
