import { ActionParams } from '../actions-registry'
import { ActionCallback } from '../lib/action-controller/types'
import { Editor } from 'slate'

export const setLinkForText: ActionCallback<ActionParams> = ({
  editor,
  event,
  ui,
}) => {
  event.preventDefault()
  if (!editor.selection) return

  const marks = Editor.marks(editor)
  if (!marks) return

  ui.linkPopup.show({
    selection: editor.selection,
    href: marks.href,
  })

  setTimeout(ui.linkPopup.focus)
}
