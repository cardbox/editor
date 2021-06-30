import Tippy from '@tippyjs/react'
import clsx from 'clsx'
import React, { useContext, useMemo, useState } from 'react'
import { Editor, Element, Range, Transforms } from 'slate'
import {
  ReactEditor,
  RenderElementProps,
  useReadOnly,
  useSelected,
} from 'slate-react'
import { useEditor } from '../lib/hooks/use-editor'
import { useEditorNodeRef } from '../lib/hooks/use-editor-node-ref'
import { TIPPY_THEMES } from '../lib/tippy'
import { ElementType } from '../types'
import { CodeComponent, CodeLineComponent } from './elements/code'
import { Heading1Component } from './elements/heading-1'
import {
  ListItemComponent,
  OrderedListComponent,
  UnorderedListComponent,
} from './elements/list'
import { ParagraphComponent } from './elements/paragraph'
import { ELEMENT_SETTINGS_MAPPER } from './settings'

type ElementComponentMapper = {
  [KElementType in ElementType]: (props: RenderElementProps) => JSX.Element
}

const ELEMENT_COMPONENT_MAPPER: ElementComponentMapper = {
  'paragraph': ParagraphComponent,
  'heading-1': Heading1Component,
  'ordered-list': OrderedListComponent,
  'unordered-list': UnorderedListComponent,
  'list-item': ListItemComponent,
  'code': CodeComponent,
  'code-line': CodeLineComponent,
}

export function renderElement(props: RenderElementProps) {
  return <ElementStructure {...props} />
}

function usePath(element: Element) {
  const editor = useEditor()
  return ReactEditor.findPath(editor, element)
}

const ElementStructure = (props: RenderElementProps) => {
  const { element } = props
  const Component = ELEMENT_COMPONENT_MAPPER[element.type]
  const path = usePath(element)
  const isNested = path.length > 1

  const elementJSX = <Component {...props} />

  if (element.type === 'code-line') {
    return elementJSX
  }

  if (isNested) {
    // nested elements don't need controls yet
    return (
      <div className="element-container">
        <div className="content">
          <div contentEditable={false} />
          {elementJSX}
          <div contentEditable={false} />
        </div>
      </div>
    )
  }

  return <FirstLevelElement element={element}>{elementJSX}</FirstLevelElement>
}

interface BlockMeta {
  empty: boolean
}

interface ControlsState {
  element: Element
  meta: BlockMeta
  active: boolean
  setActive: (active: boolean) => void
}

const ControlsContext = React.createContext<ControlsState>({} as ControlsState)

function useControlsState() {
  return useContext(ControlsContext)
}

const FirstLevelElement = ({
  element,
  children,
}: {
  element: Element
  children: JSX.Element
}) => {
  const editor = useEditor()
  const readOnly = useReadOnly()
  const selected = useSelected()
  const emptySelection = editor.selection && Range.isCollapsed(editor.selection)

  // user has opened menu
  const [active, setActive] = useState(false)

  const containerClass = clsx({
    'element-container': true,
    'first-level': true,
    'visible': (selected && emptySelection) || active,
    'read-only': readOnly,
  })

  const meta: BlockMeta = {
    empty: Editor.isEmpty(editor, element),
  }

  const controlsState: ControlsState = {
    element,
    meta,
    active,
    setActive,
  }

  return (
    <ControlsContext.Provider value={controlsState}>
      <div className={containerClass}>
        {!readOnly && (
          <div className="controls" contentEditable={false}>
            <BlockTypeMenu />
          </div>
        )}
        <div className="content">
          <div contentEditable={false} />
          {children}
          <div contentEditable={false} />
        </div>
      </div>
    </ControlsContext.Provider>
  )
}

type SvgComponent = (props: React.SVGProps<SVGSVGElement>) => JSX.Element

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

const BlockTypeMenu = () => {
  const { meta, setActive } = useControlsState()

  const menuType: MenuType = meta.empty ? 'add' : 'transform'
  const { Svg, iconClass, Content } = menuSetups[menuType]

  const [isOpen, setOpen] = useState(false)

  const show = () => setOpen(true)
  const hide = () => setOpen(false)
  const toggle = () => setOpen((current) => !current)

  const fullIconClass = clsx({
    'block-menu-icon': true,
    [iconClass]: true,
    'active': isOpen,
  })

  return (
    <Tippy
      theme={TIPPY_THEMES.BLOCK_TYPE_MENU}
      interactive={true}
      placement="bottom-end"
      content={<Content show={show} hide={hide} />}
      visible={isOpen}
      onShow={() => setActive(true)}
      onHide={() => setActive(false)}
      onClickOutside={hide}
    >
      <div className={fullIconClass} onClick={toggle}>
        <Svg />
      </div>
    </Tippy>
  )
}

const AddMenu = ({ hide }: ContentProps) => {
  const editor = useEditor()
  const editorNodeRef = useEditorNodeRef()
  const { element } = useControlsState()
  const path = usePath(element)

  const add = (type: ElementType) => {
    const settings = ELEMENT_SETTINGS_MAPPER[type]
    Transforms.removeNodes(editor, { at: path })
    Transforms.insertNodes(editor, settings.create(), {
      at: path,
      select: true,
    })
    hide()
    editorNodeRef.current?.focus()
  }

  const variants = useMemo(() => {
    return Object.values(ELEMENT_SETTINGS_MAPPER)
      .filter((settings) => settings.canBeAdded !== false)
      .map(({ type, name, code }) => {
        return (
          <li
            className="block-type-menu-item"
            key={type}
            onClick={() => add(type)}
          >
            <span className="block-type-menu-item-name">{name}</span>
            <span className="block-type-menu-item-command">/{code}</span>
          </li>
        )
      })
  }, [])

  return (
    <div className="block-type-menu">
      <p className="block-type-menu-advice">Select item type</p>
      <ul className="block-type-menu-item-list">{variants}</ul>
    </div>
  )
}

const TransformMenu = ({ hide }: ContentProps) => {
  const editor = useEditor()
  const editorNodeRef = useEditorNodeRef()
  const { element } = useControlsState()
  const path = usePath(element)
  const settings = ELEMENT_SETTINGS_MAPPER[element.type]

  const transform = (type: ElementType) => {
    Transforms.setNodes(editor, { type }, { at: path })
    hide()
    editorNodeRef.current?.focus()
  }

  const variants = useMemo(() => {
    return settings.allowedTransformations.map((type) => {
      const { name, code } = ELEMENT_SETTINGS_MAPPER[type]

      return (
        <li
          className="block-type-menu-item"
          key={type}
          onClick={() => transform(type)}
        >
          <span className="block-type-menu-item-name">{name}</span>
          <span className="block-type-menu-item-command">/{code}</span>
        </li>
      )
    })
  }, [settings])

  return (
    <div className="block-type-menu">
      <p className="block-type-menu-advice">Select item type</p>
      <ul className="block-type-menu-item-list">{variants}</ul>
    </div>
  )
}

type MenuType = 'add' | 'transform'

interface ContentProps {
  show: () => void
  hide: () => void
}

interface Setup {
  Svg: SvgComponent
  iconClass: string
  Content: (props: ContentProps) => JSX.Element
}

const menuSetups: Record<MenuType, Setup> = {
  add: {
    Svg: PlusSvg,
    iconClass: 'plus',
    Content: AddMenu,
  },
  transform: {
    Svg: ArrowSvg,
    iconClass: 'arrow',
    Content: TransformMenu,
  },
}
