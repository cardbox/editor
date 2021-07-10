import { GlobalQueries } from '../global-queries'
import { Editor, Range, Transforms } from 'slate'

export const deleteBackward = (editor: Editor) => {
  if (!editor.selection) return

  if (Range.isExpanded(editor.selection)) {
    editor.deleteFragment('backward')
    return
  }

  const blockEntry = GlobalQueries.getAbove(editor, {
    type: 'block',
    mode: 'highest',
  })

  if (!blockEntry) return

  const [block, path] = blockEntry

  const isEmpty = Editor.isEmpty(editor, block)

  if (!isEmpty) {
    editor.deleteBackward('character')
    return
  }

  Transforms.removeNodes(editor, { at: path })
}
