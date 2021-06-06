import { createContext, useContext, MutableRefObject, useRef } from 'react'
import { Instance } from 'tippy.js'

interface ToolbarState {
  instance: MutableRefObject<Instance | null>
  lastSelectedText: MutableRefObject<string>
}

export const ToolbarContext = createContext<ToolbarState>({
  instance: { current: null },
  lastSelectedText: { current: '' },
})

export function useNewToolbarState() {
  return {
    instance: useRef<Instance | null>(null),
    lastSelectedText: useRef<string>(''),
  }
}

export function useToolbarState() {
  return useContext(ToolbarContext)
}

export function useToolbarActions() {
  const state = useToolbarState()

  const hide = () => {
    if (!state.instance.current) return
    state.instance.current.hide()
    state.lastSelectedText.current = ''
  }

  return {
    hide,
  }
}
