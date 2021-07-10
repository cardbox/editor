import { getAbove } from './get-above'
import { getPointBefore } from './get-point-before'
import { getPointFromLocation } from './get-point-from-location'
import { getRangeBefore } from './get-range-before'
import { getRangeFromBlockStart } from './get-range-from-block-start'
import { hasSelection } from './has-selection'
import { isInBlock } from './is-in-block'
import { isOnEdges } from './is-on-edges'
import { leafHasTextModifications } from './leaf-has-text-modifications'
import { textModifications } from './text-modifications'

export const GlobalQueries = {
  getAbove,
  getPointFromLocation,
  getPointBefore,
  getRangeBefore,
  getRangeFromBlockStart,
  hasSelection,
  leafHasTextModifications,
  textModifications,
  isInBlock,
  isOnEdges,
}
