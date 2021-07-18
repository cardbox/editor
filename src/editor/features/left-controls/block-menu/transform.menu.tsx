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

export const TransformMenu = (props: MenuAdditionalProps) => (
  <MenuWrapper
    svg={ArrowSvg}
    iconClassName="arrow"
    content={TransformMenuContent}
    {...props}
  />
)

const ArrowSvg: SvgComponent = (props) => (
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
      <polyline points="6 9 12 15 18 9" />
    </g>
  </svg>
)

const TransformMenuContent = (props: ContentProps) => {
  const { sections = [] } = props

  return (
    <div className="block-menu">
      <Transformations {...props} />
      {sections.map((section, index) => {
        const Section = section
        // eslint-disable-next-line react/no-array-index-key
        return <Section key={index} {...props} />
      })}
    </div>
  )
}

const Transformations = ({ hide }: ContentProps) => {
  const editor = useEditor()
  const editorNodeRef = useEditorNodeRef()
  const { element } = useControlsState()
  const path = usePath(element)
  const settings = SettingsRegistry.get(element.type)

  const transform = (type: ElementType) => {
    Transforms.setNodes(editor, { type }, { at: path })
    hide()
    editorNodeRef.current?.focus()
  }

  const variants = useMemo(() => {
    return settings.allowedTransformations.map((type) => {
      const { name, code } = SettingsRegistry.get(type)

      return (
        <BlockMenuContent.Item
          key={type}
          name={name}
          detail={`/${code}`}
          onClick={() => transform(type)}
        />
      )
    })
  }, [settings])

  if (variants.length === 0) {
    return null
  }

  return (
    <BlockMenuContent.Section name="Select item type">
      <BlockMenuContent.List>{variants}</BlockMenuContent.List>
    </BlockMenuContent.Section>
  )
}

function usePath(element: Element) {
  const editor = useEditor()
  return ReactEditor.findPath(editor, element)
}
