import { Editor } from 'slate'
import { ActionBaseParams } from '../lib/action-controller/types'
import { UI } from '../lib/hooks/use-ui.types'

export interface ActionParams extends ActionBaseParams {
  editor: Editor
  ui: UI
}
