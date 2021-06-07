import React from 'react'

export type Action =
  | 'insert-soft-break'
  | 'insert-exit-break'
  | 'get-out-the-leaf'
  | 'make-bold'
  | 'make-italic'
  | 'make-underlined'
  | 'make-inline-code'

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

export type ActionEvent = KeyboardEvent | React.KeyboardEvent

export interface ActionBaseParams {
  event: ActionEvent
}

export type ActionCallback<
  TParams extends ActionBaseParams = ActionBaseParams
> = (params: TParams) => void
