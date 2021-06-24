import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react'
import { Editor, Text } from 'slate'
import { Action, actions } from '../../../actions'
import { useEditor } from '../../../lib/hooks/use-editor'
import { useUI } from '../../../lib/hooks/use-ui'
import { NoopEvents } from '../../../lib/util'
import { ToolbarButton } from './common'

type Mark = keyof Omit<Text, 'text'>

function hasMark(editor: Editor, mark: Mark) {
  const marks = Editor.marks(editor)
  if (!marks) return false
  return Boolean(marks[mark])
}

interface Props {
  mark: Mark
  icon: ReactNode
  action: Action
  tooltip?: string
  style?: CSSProperties
}

export const ToolbarMarkButton = ({
  mark,
  icon,
  action,
  tooltip,
  style = {},
}: Props) => {
  const editor = useEditor()
  const isActive = hasMark(editor, mark)
  const ui = useUI()

  const handleClick: MouseEventHandler<Element> = (event) => {
    event.preventDefault()

    actions.execute(action, {
      editor,
      event: NoopEvents.keyboard(),
      ui,
    })
  }

  return (
    <ToolbarButton
      icon={icon}
      isActive={isActive}
      tooltip={tooltip}
      onClick={handleClick}
      style={style}
    />
  )
}
