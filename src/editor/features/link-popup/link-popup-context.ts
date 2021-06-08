import { createContext, useContext, MutableRefObject, useRef } from 'react'
import { Instance } from 'tippy.js'
import { useForceUpdate } from '../../lib/hooks/use-force-update'

export interface LinkPopupState {
  instance: MutableRefObject<Instance | null>
  lastSelectedText: MutableRefObject<string>
}

export const LinkPopupContext = createContext<LinkPopupState>({
  instance: { current: null },
  lastSelectedText: { current: '' },
})

export function useNewLinkPopupState() {
  return {
    instance: useRef<Instance | null>(null),
    lastSelectedText: useRef<string>(''),
  }
}

export function useLinkPopupState() {
  return useContext(LinkPopupContext)
}

export function useLinkPopupActions() {
  const state = useLinkPopupState()
  const forceUpdate = useForceUpdate()

  const show = () => {
    if (!state.instance.current) return
    state.instance.current.show()
  }

  const hide = () => {
    if (!state.instance.current) return
    state.instance.current.hide()
    state.lastSelectedText.current = ''
  }

  const update = () => {
    forceUpdate()
  }

  return {
    show,
    hide,
    update,
  }
}

export type LinkPopupActions = ReturnType<typeof useLinkPopupActions>
