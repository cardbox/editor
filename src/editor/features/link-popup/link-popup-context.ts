import { createContext, useContext, useRef, useState } from 'react'
import { Range } from 'slate'
import { Instance } from 'tippy.js'
import { useForceUpdate } from '../../lib/hooks/use-force-update'

export function useNewLinkPopupState() {
  const [href, setHref] = useState('')
  return {
    instance: useRef<Instance | null>(null),
    input: useRef<HTMLInputElement | null>(null),
    selection: useRef<Range | null>(null),
    href,
    setHref,
  }
}

export type LinkPopupState = ReturnType<typeof useNewLinkPopupState>

export const LinkPopupContext = createContext<LinkPopupState>({
  instance: { current: null },
  input: { current: null },
  selection: { current: null },
  href: '',
  setHref: () => {},
})

export function useLinkPopupState() {
  return useContext(LinkPopupContext)
}

export function useLinkPopupActions() {
  const state = useLinkPopupState()
  const forceUpdate = useForceUpdate()

  const show = ({
    selection,
    href = '',
  }: {
    selection: Range
    href?: string
  }) => {
    if (!state.instance.current) return
    state.selection.current = selection
    state.instance.current.show()
    state.setHref(href)
  }

  const hide = () => {
    if (!state.instance.current) return
    state.instance.current.hide()
    state.selection.current = null
  }

  const focus = () => {
    if (!state.input.current) return
    state.input.current.focus()
  }

  const update = () => {
    forceUpdate()
  }

  return {
    show,
    hide,
    focus,
    update,
  }
}

export type LinkPopupActions = ReturnType<typeof useLinkPopupActions>
