import { CustomElement } from './elements'
import { LeafElement } from './leaf'
import { BaseEditor, BaseRange } from 'slate'
import { ReactEditor } from 'slate-react'

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: LeafElement
    Range: BaseRange & { prismToken?: string }
  }
}
