import { RenderElementProps } from 'slate-react'
import { LeafModification } from '../leaf/types'
import { Heading1Element } from './heading-1.types'
import { ParagraphElement } from './paragraph.types'

export type CustomElement = ParagraphElement | Heading1Element
export type DefaultElement = ParagraphElement

export type CustomElementType = CustomElement['type']
export type DefaultElementType = DefaultElement['type']
export type CreateDefaultElement = () => DefaultElement

export type ElementComponentMapper = {
  [ElementType in CustomElementType]: (props: RenderElementProps) => JSX.Element
}

export interface ElementSettings {
  readonly allowedModifications: LeafModification[]
  readonly allowedTransformations: CustomElementType[]
}

export type ElementSettingsMapper = {
  [ElementType in CustomElementType]: ElementSettings
}
