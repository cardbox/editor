import isHotkey from 'is-hotkey'
import React from 'react'

type EventListener<TContext = void> = (
  event: KeyboardEvent | React.KeyboardEvent,
  context: TContext
) => void

type KeybindCallback<TContext = void> = (
  context: TContext,
  event: KeyboardEvent
) => void

interface KeybindListener<TContext = void> {
  keybind: string
  is: (event: KeyboardEvent) => boolean
  callback: KeybindCallback<TContext>
}

type KeybindListeners<TContext = void> = {
  [Scope in string]?: KeybindListener<TContext>[]
}

const listeners: KeybindListeners<unknown> = {}

interface Params {
  scope?: string
  stopAllEvents?: boolean
}

export function createKeybindController<TContext = void>({
  scope = 'global',
  stopAllEvents = true,
}: Params = {}) {
  if (!listeners[scope]) {
    listeners[scope] = []
  }

  const scopeListeners = listeners[scope] as KeybindListener<TContext>[]

  const register = (keybind: string, callback: KeybindCallback<TContext>) => {
    scopeListeners.push({
      keybind,
      callback,
      is: isHotkey(keybind, { byKey: true }),
    })
  }

  const unregister = (keybind: string) => {
    const index = scopeListeners.findIndex((item) => item.keybind === keybind)
    if (index === -1) return
    scopeListeners.splice(index, 1)
  }

  const unregisterAll = () => {
    scopeListeners.splice(0, scopeListeners.length)
  }

  const keyDown: EventListener<TContext> = (event, context) => {
    const nativeEvent = event instanceof Event ? event : event.nativeEvent
    if (stopAllEvents) nativeEvent.stopPropagation()

    for (const listener of scopeListeners) {
      const match = listener.is(nativeEvent)
      if (!match) continue
      if (!stopAllEvents) nativeEvent.stopPropagation()
      listener.callback(context, nativeEvent)
      break
    }
  }

  return {
    register,
    unregister,
    unregisterAll,
    keyDown,
  }
}
