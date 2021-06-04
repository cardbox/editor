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
    const hide = () => {
      setVisible(false)
      const { current: toolbar } = toolbarRef
      if (!toolbar) return
      toolbar.style.left = ''
      toolbar.style.top = ''
    }

    const listener = (event: Event) => {
      console.log(event)

      if (!editorNodeRef.current) return
      if (!toolbarRef.current) return

      if (document.activeElement !== editorNodeRef.current) {
        return hide()
      }

      const selection = window.getSelection()

      if (!selection || selection.isCollapsed) {
        return hide()
      }

      setVisible(true)

      const { left, top } = calculateTooltipPosition({
        selection: selection.getRangeAt(0).getBoundingClientRect(),
        editor: editorNodeRef.current.getBoundingClientRect(),
        toolbar: toolbarRef.current.getBoundingClientRect(),
      })

      toolbarRef.current.style.left = left + 'px'
      toolbarRef.current.style.top = top + 'px'
    }

    document.addEventListener('selectionchange', listener)
    return () => document.removeEventListener('selectionchange', listener)
  }, [editorNodeRef, toolbarRef])

  return (
    <div
      className={styles.toolbar}
      data-visible={visible}
      ref={toolbarRef}
      onMouseDown={(event) => event.preventDefault()}
      onSelect={(event) => event.preventDefault()}
    >
      Toolbar
    </div>
  )
}

function calculateTooltipPosition({
  selection,
  editor,
  toolbar,
}: {
  selection: DOMRect
  editor: DOMRect
  toolbar: DOMRect
}) {
  let top: number
  let left: number

  const margins = {
    // between tooltip and selection
    selection: 8,
    // between tooltip and document's edge
    document: 8,
  }

  /*
   * We calculate position relative to the editor's top left corner
   * Both selection and editor rects have coords relative to the document's top left corner
   *
   * So, to get the relative selection's coords
   * We need to subtract the initial editor's coords from the selection's ones
   */
  const relativeX = selection.x - editor.x
  const relativeY = selection.y - editor.y

  left = relativeX + selection.width / 2 - toolbar.width / 2

  if (left < 0 && editor.x + left < margins.document) {
    left = -(editor.x - margins.document)
  }

  if (selection.top < toolbar.height + margins.selection + margins.document) {
    top = relativeY + selection.height + margins.selection
  } else {
    top = relativeY - toolbar.height - margins.selection
  }

  return {
    left,
    top,
  }
}
