import { useForceUpdate } from '../../lib/hooks/use-force-update'
import { createContext, useContext, useRef } from 'react'
import { Instance } from 'tippy.js'

export function useNewToolbarState() {
  return {
    instance: useRef<Instance | null>(null),
    lastSelectedText: useRef<string>(''),
  }
}

export type ToolbarState = ReturnType<typeof useNewToolbarState>

export const ToolbarContext = createContext<ToolbarState>({
  instance: { current: null },
  lastSelectedText: { current: '' },
})

export function useToolbarState() {
  return useContext(ToolbarContext)
}

export function useToolbarActions() {
  const state = useToolbarState()
  const forceUpdate = useForceUpdate()

  const update = () => {
    forceUpdate()
  }

  const hide = () => {
    if (!state.instance.current) return
    state.instance.current.hide()
    state.lastSelectedText.current = ''
  }

  return {
    update,
    hide,
  }
}

export type ToolbarActions = ReturnType<typeof useToolbarActions>
