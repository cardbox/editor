import { getAbove } from './get-above'
import { getPointFromLocation } from './get-point-from-location'
import { Editor, Location, Point } from 'slate'

interface Options {
  at?: Location
  edge: 'start' | 'end'
  matchString: string | string[]
  failOnInvalid?: boolean
}

export function getPointBefore(
  editor: Editor,
  options: Options
): Point | undefined {
  if (!editor.selection) return

  const leafEntry = getAbove(editor, { type: 'leaf' })
  if (!leafEntry) return

  const [, currentLeafPath] = leafEntry
  const currentLeafPoint = getPointFromLocation(currentLeafPath)
  if (!currentLeafPoint) return

  const at = getPointFromLocation(options.at || editor.selection)
  if (!at) return

  const matchString =
    typeof options.matchString === 'string'
      ? [options.matchString]
      : options.matchString

  outer: for (const string of matchString) {
    let stack = string.split('')
    let currentPoint = at

    let start: Point = at
    let end: Point = at

    while (stack.length > 0) {
      const expectedChar = stack.pop()

      if (!expectedChar) {
        continue outer
      }

      const prevPoint = Editor.before(editor, currentPoint)

      if (!prevPoint) {
        continue outer
      }

      const prevChar = Editor.string(editor, {
        anchor: prevPoint,
        focus: currentPoint,
      })

      if (prevChar !== expectedChar) {
        if (options.failOnInvalid) {
          continue outer
        }

        stack = string.split('')
      }

      // start is always the most left point
      start = prevPoint

      // end is the most right point of match
      if (stack.length + 1 === string.length) {
        end = currentPoint
      }

      currentPoint = prevPoint

      // prevent going out the leaf
      if (stack.length > 0 && Point.equals(currentPoint, currentLeafPoint)) {
        continue outer
      }
    }

    // full match
    return options.edge === 'start' ? start : end
  }
}
