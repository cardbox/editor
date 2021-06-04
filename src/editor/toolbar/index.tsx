import { createPopper, VirtualElement } from '@popperjs/core'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { Editor } from 'slate'
import { useEditorNodeRef } from '../lib/hooks/use-editor-node-ref'
import styles from './index.module.css'

interface Props {
  editor: Editor
}

export const Toolbar = ({ editor }: Props) => {
  const [visible, setVisible] = useState(false)
  const editorNodeRef = useEditorNodeRef(editor)
  const toolbarRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!toolbarRef.current) return

    const virtualElement: VirtualElement = {
      getBoundingClientRect: () => {
        const selection = window.getSelection()
        if (!selection) return new DOMRect()
        return selection.getRangeAt(0).getBoundingClientRect()
      },
    }

    const popperInstance = createPopper(virtualElement, toolbarRef.current, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
        {
          name: 'computeStyles',
          options: {
            gpuAcceleration: false,
          },
        },
      ],
    })

    const listener = () => {
      if (!editorNodeRef.current) return
      if (!toolbarRef.current) return

      if (document.activeElement !== editorNodeRef.current) {
        toolbarRef.current.style.top = ''
        toolbarRef.current.style.right = ''
        toolbarRef.current.style.bottom = ''
        toolbarRef.current.style.left = ''
        setVisible(false)
        return
      }

      const selection = window.getSelection()

      if (!selection || selection.isCollapsed) {
        toolbarRef.current.style.top = ''
        toolbarRef.current.style.right = ''
        toolbarRef.current.style.bottom = ''
        toolbarRef.current.style.left = ''
        setVisible(false)
        return
      }

      setVisible(true)
      popperInstance.update()
    }

    document.addEventListener('selectionchange', listener)
    return () => {
      document.removeEventListener('selectionchange', listener)
      popperInstance.destroy()
    }
  }, [editorNodeRef, toolbarRef])

  return (
    <div
      className={styles.toolbar}
      data-visible={visible}
      ref={toolbarRef}
      // onMouseDown={(event) => event.preventDefault()}
      // onSelect={(event) => event.preventDefault()}
    >
      Toolbar
    </div>
  )
}
