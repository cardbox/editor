import { Range } from 'slate'
import { CustomTransforms } from '../../../lib/custom-transforms'
import { REGEX } from '../../../lib/util'
import { PasteListener } from './types'

export const link: PasteListener = ({ editor, event }) => {
  if (!editor.selection) return
  if (Range.isCollapsed(editor.selection)) return
  const text = event.clipboardData.getData('text')
  const url = new RegExp(REGEX.URL)
  if (!url.test(text)) return
  event.preventDefault()
  CustomTransforms.setHref(editor, text)
}
