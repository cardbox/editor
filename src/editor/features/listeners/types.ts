import { Editor } from 'slate'
import { UI } from '../../lib/hooks/use-ui.types'

export interface EditorListenerParams {
  editor: Editor
  ui: UI
}
