import { useEditor, useEditorNodeRef } from '../../../lib/hooks/slate'
import { SettingsRegistry } from '../../../registries/settings'
import { ElementType } from '../../../shared/types'
import { useControlsState } from '../controls'
import { MenuWrapper } from './menu-wrapper'
import { BlockMenuContent } from './shared'
import { ContentProps, MenuAdditionalProps, SvgComponent } from './types'
import React, { useMemo } from 'react'
import { Element, Transforms } from 'slate'
import { ReactEditor } from 'slate-react'

export const AddMenu = (props: MenuAdditionalProps) => (
  <MenuWrapper
    svg={PlusSvg}
    iconClassName="plus"
    content={AddMenuContent}
    {...props}
  />
)

const PlusSvg: SvgComponent = (props) => (
  <svg
    preserveAspectRatio="xMidYMid meet"
    height="1em"
    width="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="currentColor"
    {...props}
  >
    <g>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </g>
  </svg>
)

const AddMenuContent = ({ hide }: ContentProps) => {
  const editor = useEditor()
  const editorNodeRef = useEditorNodeRef()
  const { element } = useControlsState()
  const path = usePath(element)

  const add = (type: ElementType) => {
    const settings = SettingsRegistry.get(type)
    Transforms.removeNodes(editor, { at: path })
    Transforms.insertNodes(editor, settings.create(), {
      at: path,
      select: true,
    })
    hide()
    editorNodeRef.current?.focus()
  }

  const variants = useMemo(() => {
    return SettingsRegistry.getAll()
      .filter((settings) => settings.canBeAdded !== false)
      .map(({ type, name, code }) => {
        return (
          <BlockMenuContent.Item
            key={type}
            name={name}
            detail={`/${code}`}
            onClick={() => add(type)}
          />
        )
      })
  }, [])

  return (
    <div className="block-menu">
      <BlockMenuContent.Section name="Select item type">
        <BlockMenuContent.List>{variants}</BlockMenuContent.List>
      </BlockMenuContent.Section>
    </div>
  )
}

function usePath(element: Element) {
  const editor = useEditor()
  return ReactEditor.findPath(editor, element)
}
