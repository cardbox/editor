import { Editor } from 'slate'
import { actions } from '../../../actions'
import { GlobalQueries } from '../../../lib/global-queries'
import { insertExitBreak } from './insert-exit-break'

function match({ editor }: { editor: Editor }) {
  return GlobalQueries.isInBlock(editor, ['ordered-list', 'unordered-list'])
}

actions.override('insert-exit-break', insertExitBreak, { match })
