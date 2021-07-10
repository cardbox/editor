import { GlobalTransforms } from '../../../lib/global-transforms'
import { REGEX } from '../../../lib/util'
import { PasteListener } from './types'
import { Range } from 'slate'

export const link: PasteListener = ({ editor, event }) => {
  if (!editor.selection) return
  if (Range.isCollapsed(editor.selection)) return
  const text = event.clipboardData.getData('text')
  const url = new RegExp(REGEX.URL)
  if (!url.test(text)) return
  event.preventDefault()
  GlobalTransforms.setHref(editor, text)
}
