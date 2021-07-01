import { BaseEditor, BaseRange } from 'slate'
import { ReactEditor } from 'slate-react'
import { CustomElement } from './elements'
import { LeafElement } from './leaf/types'

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: LeafElement
    Range: BaseRange & { prismToken?: string }
  }
}
