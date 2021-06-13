import { Editor } from 'slate'
import { actions } from '../../../actions'
import { EditorQueries } from '../../../lib/editor-queries'
import { insertExitBreak } from './insert-exit-break'

function match({ editor }: { editor: Editor }) {
  return EditorQueries.isInBlock(editor, ['ordered-list', 'unordered-list'])
}

actions.override('insert-exit-break', insertExitBreak, { match })
