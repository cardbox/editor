import { getAbove } from './get-above'
import { getPointFromLocation } from './get-point-from-location'
import { Editor, Location, Point } from 'slate'

interface Options {
  of?: Location
  location?: Location
}

type Result = [boolean, boolean]

export function isOnEdges(editor: Editor, options: Options = {}): Result {
  const getDefaultOf = () => {
    const entry = getAbove(editor, { type: 'block', mode: 'lowest' })
    if (!entry) return
    return entry[1]
  }

  const bothFalsy: Result = [false, false]

  const { of = getDefaultOf(), location = editor.selection } = options
  if (!of) return bothFalsy
  if (!location) return bothFalsy

  const point = getPointFromLocation(location)
  if (!point) return bothFalsy

  const [start, end] = Editor.edges(editor, of)

  return [Point.equals(point, start), Point.equals(point, end)]
}
