import { getAbove } from './get-above'
import { getPointBefore } from './get-point-before'
import { getPointFromLocation } from './get-point-from-location'
import { getRangeBefore } from './get-range-before'
import { getRangeFromBlockStart } from './get-range-from-block-start'
import { hasSelection } from './has-selection'
import { leafHasModifications } from './leaf-has-modifications'
import { leafModifications } from './leaf-modifications'

export const EditorQueries = {
  getAbove,
  getPointFromLocation,
  getPointBefore,
  getRangeBefore,
  getRangeFromBlockStart,
  hasSelection,
  leafHasModifications,
  leafModifications,
}
