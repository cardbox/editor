import { actions } from '../../../actions'
import { GlobalQueries } from '../../../lib/global-queries'
import { deleteBackward } from './delete-backward'
import { indent } from './indent'
import { insertExitBreak } from './insert-exit-break'
import { outdent } from './outdent'
import { Editor } from 'slate'

function match({ editor }: { editor: Editor }) {
  return GlobalQueries.isInBlock(editor, ['ordered-list', 'unordered-list'])
}

actions.override('delete-backward', deleteBackward, { match })
actions.override('insert-exit-break', insertExitBreak, { match })
actions.override('indent', indent, { match })
actions.override('outdent', outdent, { match })
