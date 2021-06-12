import { RenderElementProps } from 'slate-react'
import { LeafModification } from '../leaf/types'
import { Heading1Element } from './heading-1.types'
import {
  ListElement,
  ListItemContentElement,
  ListItemElement,
} from './list/types'
import { ParagraphElement } from './paragraph.types'

export type CustomElement =
  | ParagraphElement
  | Heading1Element
  | ListElement
  | ListItemElement
  | ListItemContentElement
export type DefaultElement = ParagraphElement

export type CustomElementType = CustomElement['type']
export type DefaultElementType = DefaultElement['type']
export type CreateDefaultElement = () => DefaultElement

export type ElementComponentMapper = {
  [ElementType in CustomElementType]: (props: RenderElementProps) => JSX.Element
}

export interface ElementSettings {
  // used in different interface elements
  readonly name: string

  // used in slash commands
  readonly code: string

  // 'code' aliases for better search
  readonly aliases?: string[]

  readonly canBeSearched?: boolean

  // leaf modifications which you can apply to element's text
  readonly allowedModifications: LeafModification[]

  // available transformations
  // for example, a paragraph can be transformed into the heading
  readonly allowedTransformations: CustomElementType[]
}

export type ElementSettingsMapper = {
  [ElementType in CustomElementType]: ElementSettings
}
