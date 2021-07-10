import { UI } from '../../lib/hooks/use-ui.types'
import { Editor } from 'slate'

export interface EditorListenerParams {
  editor: Editor
  ui: UI
}
