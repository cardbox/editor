import React from 'react'

export type ActionEvent = KeyboardEvent | React.KeyboardEvent

export interface ActionBaseParams {
  event: ActionEvent
}

export type ActionCallback<
  TParams extends ActionBaseParams = ActionBaseParams
> = (params: TParams) => void
