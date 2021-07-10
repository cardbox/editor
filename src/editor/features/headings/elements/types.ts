import { Text } from 'slate'

export interface Heading1Element {
  type: 'heading-1'
  children: Text[]
}

export interface Heading2Element {
  type: 'heading-2'
  children: Text[]
}

export interface Heading3Element {
  type: 'heading-3'
  children: Text[]
}
