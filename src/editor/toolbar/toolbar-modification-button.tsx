import Tippy from '@tippyjs/react'
import React, {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  useEffect,
} from 'react'
import { Editor } from 'slate'
import { actionController } from '../actions'
import { LeafModification } from '../leaf/types'
import { Action } from '../lib/action-controller/types'
import { useEditor } from '../lib/hooks/use-editor'
import { useForceUpdate } from '../lib/hooks/use-force-update'
import { useThrottled } from '../lib/hooks/use-throttled'
import { THEMES } from '../lib/tippy/themes'
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
  tooltip?: string
  style?: CSSProperties
}

export const ToolbarModificationButton = ({
  modification,
  icon,
  action,
  tooltip,
  style = {},
}: Props) => {
  const editor = useEditor()
  const isActive = hasModification(editor, modification)
  const forceUpdate = useThrottled(useForceUpdate(), 300)

  useEffect(() => {
    document.addEventListener('selectionchange', forceUpdate)
    return () => document.removeEventListener('selectionchange', forceUpdate)
  }, [forceUpdate])

  const handleClick: MouseEventHandler<Element> = (event) => {
    event.preventDefault()
    actionController.execute(action, editor, noopKeyboardEvent)
  }

  const jsx = (
    <button
      className={styles.container}
      data-active={isActive}
      onClick={handleClick}
    >
      <span className={styles.icon} style={style}>
        {icon}
      </span>
    </button>
  )

  if (tooltip) {
    return (
      <Tippy
        theme={THEMES.EDITOR_DEFAULT}
        content={tooltip}
        offset={[0, 15]}
        hideOnClick={false}
      >
        {jsx}
      </Tippy>
    )
  }

  return jsx
}
