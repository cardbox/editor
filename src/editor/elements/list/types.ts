import { Text } from 'slate'

export interface ListItemContentElement {
  id: string
  type: 'list-item-content'
  children: Text[]
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
