import { createKeybindController } from '../../lib/keybind-controller'
import { Editor } from 'slate'

export const keybinds = createKeybindController<Editor>({
  scope: 'slate-editor',
})
