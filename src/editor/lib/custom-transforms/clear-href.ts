import { Editor, Range, Transforms } from 'slate'
import { LeafElement } from '../../entities/leaf/types'

interface Options {
  at?: Range | null
}

export function clearHref(editor: Editor, options: Options = {}) {
  const { at = editor.selection } = options
  if (!at) return
  Transforms.select(editor, at)

  const marks = Editor.marks(editor)
  if (!marks) return

  const mark: keyof LeafElement = 'href'
  editor.removeMark(mark)
  Transforms.collapse(editor, { edge: 'focus' })
}
