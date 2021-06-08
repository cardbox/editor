import { Location, Path, Point, Range } from 'slate'

export function getPointFromLocation(location: Location): Point | undefined {
  if (Range.isRange(location)) {
    return location.anchor
  }

  if (Point.isPoint(location)) {
    return location
  }

  if (Path.isPath(location)) {
    return { path: location, offset: 0 }
  }
}
