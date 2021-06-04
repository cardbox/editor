import React, { CSSProperties, ReactNode, useEffect } from 'react'
import { Editor } from 'slate'
import { actionController } from '../actions'
import { LeafModification } from '../leaf/types'
import { Action } from '../lib/action-controller/types'
import { useEditor } from '../lib/hooks/use-editor'
import { useForceUpdate } from '../lib/hooks/use-force-update'
import { noopKeyboardEvent } from '../lib/util'
import styles from './toolbar-modification-button.module.css'

function hasModification(editor: Editor, modification: LeafModification) {
  const marks = Editor.marks(editor)
  if (!marks) return false
  return Boolean(marks[modification])
}

interface Props {
  modification: LeafModification
  icon: ReactNode
  action: Action
  style?: CSSProperties
}

export const ToolbarModificationButton = ({
  modification,
  icon,
  action,
  style = {},
}: Props) => {
  const editor = useEditor()
  const isActive = hasModification(editor, modification)
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    document.addEventListener('selectionchange', () => {
      console.log('selectionchange')
      forceUpdate()
    })
    return () => document.removeEventListener('selectionchange', forceUpdate)
  }, [forceUpdate])

  return (
    <button
      className={styles.container}
      data-active={isActive}
      onClick={() => {
        actionController.execute(action, editor, noopKeyboardEvent)
      }}
    >
      <span className={styles.icon} style={style}>
        {icon}
      </span>
    </button>
  )
}
