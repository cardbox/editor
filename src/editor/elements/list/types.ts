import { Element } from 'slate'

export type ListElement = OrderedListElement | UnorderedListElement

export interface ListItemElement {
  id: string
  type: 'list-item'
  children: Element[]
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
