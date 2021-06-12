import { LeafElement } from '../../leaf/types'

export interface ListItemContentElement {
  type: 'list-item-content'
  children: LeafElement[]
}

export type ListElement = OrderedListElement | UnorderedListElement
export type SupportedListChildrenElement = ListItemContentElement | ListElement

export interface ListItemElement {
  type: 'list-item'
  children: SupportedListChildrenElement[]
}

export interface OrderedListElement {
  type: 'ordered-list'
  children: ListItemElement[]
}

export interface UnorderedListElement {
  type: 'unordered-list'
  children: ListItemElement[]
}
