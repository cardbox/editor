import { Element } from 'slate'

export type ListElement = OrderedListElement | UnorderedListElement

export interface ListItemElement {
  type: 'list-item'
  children: Element[]
}

export interface OrderedListElement {
  type: 'ordered-list'
  children: ListItemElement[]
}

export interface UnorderedListElement {
  type: 'unordered-list'
  children: ListItemElement[]
}
