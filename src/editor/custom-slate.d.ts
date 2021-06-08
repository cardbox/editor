import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { CustomElement } from './entities/elements'
import { LeafElement } from './entities/leaf/types'

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: LeafElement
  }
}
