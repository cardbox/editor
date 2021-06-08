import { Editor } from 'slate'
import { ActionBaseParams } from '../../lib/action-controller/types'
import { UI } from '../../lib/hooks/use-ui.types'

export type Action =
  | 'insert-soft-break'
  | 'insert-exit-break'
  | 'get-out-the-leaf'
  | 'make-bold'
  | 'make-italic'
  | 'make-underlined'
  | 'make-inline-code'
  | 'set-link-for-text'

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
