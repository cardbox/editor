import { Text } from 'slate'

export interface ParagraphElement {
  id: string
  type: 'paragraph'
  children: Text[]
}
