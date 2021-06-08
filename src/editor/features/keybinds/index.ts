import { Editor } from 'slate'
import { createKeybindController } from '../../lib/keybind-controller'

export const keybinds = createKeybindController<Editor>({
  scope: 'slate-editor',
})
