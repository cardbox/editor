import { actions } from '../../../actions'
import { GlobalQueries } from '../../../lib/global-queries'
import { indent } from './indent'
import { Editor } from 'slate'

function match({ editor }: { editor: Editor }) {
  return GlobalQueries.isInBlock(editor, 'paragraph')
}

actions.override('indent', indent, { match })
