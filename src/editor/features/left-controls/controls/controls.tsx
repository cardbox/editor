import { useEditor } from '../../../lib/hooks/slate'
import { ControlsProvider } from './context'
import { BlockMeta, ControlsState } from './types'
import clsx from 'clsx'
import React, { useState } from 'react'
import { Editor, Element, Range } from 'slate'
import { useReadOnly, useSelected } from 'slate-react'

interface ControlsProps {
  element: Element
  render: () => JSX.Element | JSX.Element[]
}

export const Controls = ({ element, render }: ControlsProps) => {
  const readOnly = useReadOnly()

  if (readOnly) return null

  return <ControlsInner element={element} render={render} />
}

const ControlsInner = ({ element, render }: ControlsProps) => {
  const editor = useEditor()

  const isSelectionInElement = useSelected()
  const isSelectionEmpty =
    editor.selection && Range.isCollapsed(editor.selection)
  const isSelectionOk = isSelectionInElement && isSelectionEmpty
  const [active, setActive] = useState(false)

  const meta: BlockMeta = {
    empty: Editor.isEmpty(editor, element),
  }

  const controlsState: ControlsState = {
    element,
    meta,
    active,
    setActive,
  }

  const visible = active || isSelectionOk

  const className = clsx({
    controls: true,
    visible,
  })

  return (
    <ControlsProvider value={controlsState}>
      <div className={className} contentEditable={false}>
        {render()}
      </div>
    </ControlsProvider>
  )
}
