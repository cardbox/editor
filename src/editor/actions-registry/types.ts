import { ActionBaseParams } from '../lib/action-controller/types'
import { UI } from '../lib/hooks/use-ui.types'
import { Editor } from 'slate'

export type Action =
  | 'delete-backward'
  | 'insert-soft-break'
  | 'insert-exit-break'
  | 'indent'
  | 'outdent'
  | 'get-out-the-leaf'
  | 'make-bold'
  | 'make-italic'
  | 'make-underlined'
  | 'make-inline-code'
  | 'set-link-for-text'
  | 'copy'
  | 'copy-all'
  | 'paste'
  | 'exit-block'

export type ActionKeybinds = {
  [KAction in Action]?: string | string[]
}

export type CustomActionKeybinds = Omit<
  ActionKeybinds,
  'insert-soft-break' | 'insert-exit-break' | 'get-out-the-leaf'
>

export type DefaultActionKeybinds = {
  [KAction in Action]: string | string[]
}

export interface ActionParams extends ActionBaseParams {
  editor: Editor
  ui: UI
}
