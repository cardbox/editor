import { useEditor } from '../../../lib/hooks/slate'
import { useUI } from '../../../lib/hooks/use-ui'
import { NoopEvents } from '../../../lib/util'
import { Action, ActionsRegistry } from '../../../registries/actions'
import { ToolbarButton } from './common'
import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react'
import { Editor, Text } from 'slate'

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

    ActionsRegistry.execute(action, {
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
