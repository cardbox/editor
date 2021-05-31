import React from 'react'

export type Action =
  | 'insert-soft-break'
  | 'insert-exit-break'
  | 'make-bold'
  | 'make-italic'
  | 'make-underlined'
  | 'make-inline-code'

export type ActionKeybinds = {
  [KAction in Action]?: string | string[]
}

export type CustomActionKeybinds = Omit<ActionKeybinds, 'place-break'>

export type DefaultActionKeybinds = {
  [KAction in Action]: string | string[]
}

export type ActionEvent = KeyboardEvent | React.KeyboardEvent

export type ActionCallback<TContext = void> = (
  context: TContext,
  event: ActionEvent
) => void
