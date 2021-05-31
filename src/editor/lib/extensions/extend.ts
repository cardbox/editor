import { Editor } from 'slate'

export type Extension = (editor: Editor) => Editor

export function extend(editor: Editor, extensions: Extension[]): Editor {
  return extensions.reduce((currentEditor, extension) => {
    return extension(currentEditor)
  }, editor)
}
