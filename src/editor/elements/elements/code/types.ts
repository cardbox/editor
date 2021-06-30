import { Text } from 'slate'

export interface CodeElement {
  type: 'code'
  children: CodeLineElement[]
  language: string
}

export interface CodeLineElement {
  type: 'code-line'
  children: Text[]
}
