import { useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import tippy from 'tippy.js'
import { useEditorNodeRef } from '../../lib/hooks/use-editor-node-ref'
import { THEMES } from '../../lib/tippy/themes'
import styles from './link-popup.module.css'
import { useLinkPopupState } from './link-popup-context'

/*
 * We use this element as the React Portal container
 * It's something like our custom tippy react binding
 * (the default one doesn't work well for the toolbar)
 */
function useContainer() {
  const container = useMemo(() => {
    const element = document.createElement('div')
    element.classList.add(styles.container)
    return element
  }, [])

  /*
   * Prevent deselection after clicking on the tooltip
   */
  useEffect(() => {
    const listener = (event: Event) => event.preventDefault()
    container.addEventListener('mousedown', listener)
    return () => container.removeEventListener('mousedown', listener)
  }, [container])

  return container
}

export const LinkPopup = () => {
  const editorNodeRef = useEditorNodeRef()
  const container = useContainer()
  const { instance } = useLinkPopupState()

  // eslint-disable-next-line sonarjs/cognitive-complexity
  useEffect(() => {
    if (!editorNodeRef.current) return

    instance.current = tippy(editorNodeRef.current, {
      theme: THEMES.EDITOR_LINK_POPUP,
      content: container,
      placement: 'bottom',
      trigger: 'manual',
      interactive: true,
      offset: [0, 15],
      moveTransition: 'transform 0.1s ease-out',
      getReferenceClientRect: () => {
        const selection = window.getSelection()
        if (!selection) return new DOMRect()
        const range = selection.getRangeAt(0)
        return range.getBoundingClientRect()
      },
      hideOnClick: true,
    })

    return () => instance.current?.destroy()
  }, [container, editorNodeRef])

  return ReactDOM.createPortal('Link Popup', container)
}
