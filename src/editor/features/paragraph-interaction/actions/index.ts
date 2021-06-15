import { Editor } from 'slate'
import { actions } from '../../../actions'
import { GlobalQueries } from '../../../lib/global-queries'
import { indent } from './indent'

function match({ editor }: { editor: Editor }) {
  return GlobalQueries.isInBlock(editor, 'paragraph')
}

actions.override('indent', indent, { match })
