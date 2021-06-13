import { LeafElement } from '../leaf/types'

export interface ParagraphElement {
  id: string
  type: 'paragraph'
  children: LeafElement[]
}
