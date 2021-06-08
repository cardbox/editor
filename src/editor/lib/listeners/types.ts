import { ClipboardEvent } from 'react'

export type AnyEvent = Event | ClipboardEvent

export interface BaseListenerParams<TEvent extends AnyEvent> {
  event: TEvent
}

interface Command {
  continue: boolean
}

export type ChildListener<TParams extends BaseListenerParams<AnyEvent>> = (
  params: TParams
) => Command | void

export type Listener<TEvent extends AnyEvent> = (event: TEvent) => void
