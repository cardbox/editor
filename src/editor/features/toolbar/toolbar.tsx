import { useEditorNodeRef } from '../../lib/hooks/slate'
import { useForceUpdate } from '../../lib/hooks/use-force-update'
import { useThrottled } from '../../lib/hooks/use-throttled'
import { TIPPY_THEMES } from '../../lib/tippy'
import { useToolbarState } from './toolbar-context'
import debounce from 'just-debounce-it'
import React, { ReactNode, useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import tippy from 'tippy.js'

/*
 * We use this element as the React Portal container
 * It's something like our custom tippy react binding
 * (the default one doesn't work well for the toolbar)
 */
function useContainer() {
  const container = useMemo(() => {
    const element = document.createElement('div')
    element.classList.add('toolbar-container')
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

interface Props {
  renderButtons: () => ReactNode
}

export const Toolbar = (props: Props) => {
  if (typeof window === 'undefined') return null
  return <ToolbarInner {...props} />
}

const ToolbarInner = ({ renderButtons }: Props) => {
  const editorNodeRef = useEditorNodeRef()
  const container = useContainer()
  const { instance, lastSelectedText } = useToolbarState()
  const forceUpdate = useThrottled(useForceUpdate(), 300)

  useEffect(() => {
    if (!editorNodeRef.current) return

    instance.current = tippy(editorNodeRef.current, {
      theme: TIPPY_THEMES.TOOLBAR,
      content: container,
      placement: 'top',
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
    })

    const debouncedShow = debounce(() => {
      if (!instance.current) return
      forceUpdate() // update toolbar buttons
      instance.current.show()
    }, 300)

    const hide = (cancelShow = true) => {
      if (!instance.current) return
      instance.current.hide()
      if (cancelShow) debouncedShow.cancel()
    }

    const handleSelection = () => {
      if (!editorNodeRef.current) return
      if (!instance.current) return

      if (document.activeElement !== editorNodeRef.current) {
        /*
         * The user may select text in another instance of the Editor
         */

        return hide()
      }

      const selection = window.getSelection()

      if (!selection) {
        return hide()
      }

      if (selection.isCollapsed) {
        /*
         * The user selected 0 characters
         * We don't want to show the toolbar in this case
         */

        lastSelectedText.current = ''
        return hide()
      }

      const range = selection.getRangeAt(0)
      const selectedText = range.toString()

      const isSamePlace = selectedText === lastSelectedText.current

      if (isSamePlace) {
        /*
         * 'selectionchange' was fired but text remained the same
         * Most likely, the user just formatted the text
         * So, re-render the component to update toolbar buttons
         */

        return forceUpdate()
      }

      hide(false) // keep hidden while selecting
      debouncedShow() // show on finish

      lastSelectedText.current = selectedText
    }

    document.addEventListener('selectionchange', handleSelection)
    return () => {
      instance.current?.destroy()
      document.removeEventListener('selectionchange', handleSelection)
    }
  }, [container, editorNodeRef])

  return ReactDOM.createPortal(renderButtons(), container)
}
