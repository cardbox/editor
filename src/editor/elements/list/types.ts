import { LeafElement } from '../../leaf/types'

export interface ListItemContentElement {
  id: string
  type: 'list-item-content'
  children: LeafElement[]
}

export type ListElement = OrderedListElement | UnorderedListElement
export type SupportedListChildrenElement = ListItemContentElement | ListElement

export interface ListItemElement {
  id: string
  type: 'list-item'
  children: SupportedListChildrenElement[]
}

export interface OrderedListElement {
  id: string
  type: 'ordered-list'
  children: ListItemElement[]
}

export interface UnorderedListElement {
  id: string
  type: 'unordered-list'
  children: ListItemElement[]
}
