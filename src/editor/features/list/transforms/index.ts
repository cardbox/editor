import { deleteBackward } from './delete-backward'
import { indent } from './indent'
import { indentParagraph } from './indent-paragraph'
import { insertExitBreak } from './insert-exit-break'
import { mergeSiblings } from './merge-siblings'
import { moveChildren } from './move-children'
import { outdent } from './outdent'

export const LocalTransforms = {
  insertExitBreak,
  deleteBackward,
  indent,
  indentParagraph,
  outdent,
  mergeSiblings,
  moveChildren,
}
