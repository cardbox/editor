import { Editor } from 'slate'
import { createKeybindController } from '../lib/keybind-controller'

export const keybindController = createKeybindController<Editor>({
  scope: 'slate-editor',
})
