import { AnyEvent, BaseListenerParams, ChildListener, Listener } from './types'

export function createListener<
  TEvent extends AnyEvent,
  TParams extends BaseListenerParams<TEvent>
>(
  providedParams: Omit<TParams, 'event'>,
  listeners: ChildListener<TParams>[] = []
): Listener<TEvent> {
  return (event) => {
    const params = { event, ...providedParams } as TParams

    for (const listener of listeners) {
      const command = listener(params)
      if (!command) continue
      if (command.continue) continue
      break
    }
  }
}
