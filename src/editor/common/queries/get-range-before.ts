import { Editor, Location, Range } from 'slate'
import { getPointBefore } from './get-point-before'
import { getPointFromLocation } from './get-point-from-location'

interface Options {
  at?: Location
  matchString: string | string[]
}

export function getRangeBefore(
  editor: Editor,
  options: Options
): Range | undefined {
  if (!editor.selection) return

  const start = getPointBefore(editor, {
    ...options,
    edge: 'start',
  })
  if (!start) return

  const end = getPointFromLocation(editor.selection)
  if (!end) return

  return {
    anchor: start,
    focus: end,
  }
}
