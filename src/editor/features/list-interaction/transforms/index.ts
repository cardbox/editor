import { deleteBackward } from './delete-backward'
import { indent } from './indent'
import { insertExitBreak } from './insert-exit-break'
import { mergeSiblings } from './merge-siblings'
import { outdent } from './outdent'

export const LocalTransforms = {
  insertExitBreak,
  deleteBackward,
  indent,
  outdent,
  mergeSiblings,
}
