import clsx from 'clsx'
import React from 'react'
import { Element } from 'slate'
import { ReactEditor, RenderElementProps, useReadOnly } from 'slate-react'
import { useEditor } from './lib/hooks/slate/use-editor'
import { ElementType } from './types'
import { ParagraphComponent } from './elements/elements/paragraph'
import { Heading1Component } from './elements/elements/heading-1'
import {
  ListItemComponent,
  OrderedListComponent,
  UnorderedListComponent,
} from './elements/elements/list'
import { CodeComponent, CodeLineComponent } from './elements/elements/code'
import { Controls } from './ui/controls'
import { BlockMenu } from './ui/block-menu'
import { CodeControls } from './features/code'
import { Heading2Component } from './elements/elements/heading-2'
import { Heading3Component } from './elements/elements/heading-3'

type ElementComponentMapper = {
  [KElementType in ElementType]: (props: RenderElementProps) => JSX.Element
}

const ELEMENT_COMPONENT_MAPPER: ElementComponentMapper = {
  'paragraph': ParagraphComponent,
  'heading-1': Heading1Component,
  'heading-2': Heading2Component,
  'heading-3': Heading3Component,
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
          <Area position="top" />
          {elementJSX}
          <Area position="bottom" />
        </div>
      </div>
    )
  }

  return <FirstLevelElement element={element}>{elementJSX}</FirstLevelElement>
}

const FirstLevelElement = ({
  element,
  children,
}: {
  element: Element
  children: JSX.Element
}) => {
  const readOnly = useReadOnly()

  const containerClass = clsx({
    'element-container': true,
    'first-level': true,
    'read-only': readOnly,
  })

  return (
    <div className={containerClass}>
      <Controls
        element={element}
        render={() => <BlockMenu sections={[CodeControls]} />}
      />
      <div className="content">
        <Area position="top" />
        {children}
        <Area position="bottom" />
      </div>
    </div>
  )
}

const Area = ({
  position,
  children,
}: {
  position: 'top' | 'bottom'
  children?: JSX.Element | JSX.Element[]
}) => {
  const className = clsx({
    'element-area': true,
    ['element-area-' + position]: true,
  })

  return (
    <div contentEditable={false} className={className}>
      {children}
    </div>
  )
}
