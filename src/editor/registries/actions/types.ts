import { ActionBaseParams } from '../../lib/action-controller/types'
import { UI } from '../../lib/hooks/use-ui.types'
import { Editor } from 'slate'

export type PublicAction =
  | 'make-bold'
  | 'make-italic'
  | 'make-underlined'
  | 'make-inline-code'
  | 'set-link-for-text'

export type PrivateAction =
  | 'delete-backward'
  | 'insert-soft-break'
  | 'insert-exit-break'
  | 'indent'
  | 'outdent'
  | 'get-out-the-leaf'
  | 'copy'
  | 'copy-all'
  | 'paste'
  | 'exit-block'

export type Action = PublicAction | PrivateAction

export type ActionKeybinds<TAction extends string> = {
  [KAction in TAction]: string | string[]
}

export type OptionalActionKeybinds<TAction extends string> = {
  [KAction in TAction]?: string | string[]
}

export interface ActionParams extends ActionBaseParams {
  editor: Editor
  ui: UI
}
