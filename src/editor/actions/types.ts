import { Editor } from 'slate'
import { ActionBaseParams } from '../lib/action-controller/types'

export interface ActionParams extends ActionBaseParams {
  editor: Editor
}
