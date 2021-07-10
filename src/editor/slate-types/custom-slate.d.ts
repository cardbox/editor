import { WithCode } from '../features/code'
import { CustomElement } from './custom-element'
import { CustomLeaf } from './custom-leaf'
import { BaseEditor, BaseRange } from 'slate'
import { ReactEditor } from 'slate-react'

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomLeaf
    Range: BaseRange & WithCode
  }
}
