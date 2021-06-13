import React from 'react'

export type ActionEvent = KeyboardEvent | React.KeyboardEvent

export interface ActionBaseParams {
  event: ActionEvent
}

export type ActionCallback<
  TParams extends ActionBaseParams = ActionBaseParams
> = (params: TParams) => void

export interface ListenerConfig<
  TParams extends ActionBaseParams = ActionBaseParams
> {
  action: string
  priority: number
  callback: (params: TParams) => void
  match: (params: TParams) => boolean
}
