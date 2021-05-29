import React from 'react'

export type Action =
  | 'make-bold'
  | 'make-italic'
  | 'make-underlined'
  | 'make-strikethrough'
  | 'make-inline-code'

export type ActionKeybinds = {
  [KAction in Action]?: string | string[]
}

export type ActionEvent = KeyboardEvent | React.KeyboardEvent

export type ActionCallback<TContext = void> = (
  context: TContext,
  event: ActionEvent
) => void
