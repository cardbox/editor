import { ReactNode, useEffect, useMemo, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Editor } from 'slate'
import tippy from 'tippy.js'
import debounce from 'just-debounce'
import { useEditorNodeRef } from '../lib/hooks/use-editor-node-ref'
import { THEMES } from '../lib/tippy/themes'
import styles from './toolbar.module.css'

/*
 * We use this element as the React Portal container
 * It's something like our custom tippy react binding
 * (the default one doesn't work well for the toolbar)
 */
function useContainer() {
  const container = useMemo(() => {
    const element = document.createElement('div')
    element.classList.add(styles.toolbarContainer)
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
  editor: Editor
  children: ReactNode
}

export const Toolbar = ({ children }: Props) => {
  const editorNodeRef = useEditorNodeRef()
  const container = useContainer()
  const previousSelectedText = useRef<string>('')

  useEffect(() => {
    if (!editorNodeRef.current) return

    const instance = tippy(editorNodeRef.current, {
      theme: THEMES.EDITOR_TOOLBAR,
      content: container,
      placement: 'top',
      trigger: 'manual',
      interactive: true,
      arrow: false,
      offset: [0, 10],
      moveTransition: 'transform 0.1s ease-out',
    })

    const debouncedMakeInteractive = debounce(() => {
      instance.setProps({
        interactive: true,
      })
    }, 300)

    const handleSelection = () => {
      if (!editorNodeRef.current) return

      if (document.activeElement !== editorNodeRef.current) {
        return instance.hide()
      }

      const selection = window.getSelection()

      if (!selection) {
        return instance.hide()
      }

      const range = selection.getRangeAt(0)
      const selectedText = range.toString()

      if (selection.isCollapsed) {
        previousSelectedText.current = selectedText
        return instance.hide()
      }

      const isSamePlace = selectedText === previousSelectedText.current

      if (isSamePlace) {
        return
      }

      instance.setProps({
        // remove glithes on selection process
        interactive: false,
        getReferenceClientRect: () => {
          const range = selection.getRangeAt(0)
          return range.getBoundingClientRect()
        },
      })

      instance.show()

      // restore interactivity when selection is finished
      debouncedMakeInteractive()
      previousSelectedText.current = selectedText
    }

    document.addEventListener('selectionchange', handleSelection)
    return () => {
      instance.destroy()
      document.removeEventListener('selectionchange', handleSelection)
    }
  }, [container, editorNodeRef])

  return ReactDOM.createPortal(children, container)
}
