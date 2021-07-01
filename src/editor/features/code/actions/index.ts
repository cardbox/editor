import { Editor } from 'slate'
import { actions } from '../../../actions'
import { GlobalQueries } from '../../../lib/global-queries'
import { insertExitBreak } from './insert-exit-break'
import { copyAll } from './copy-all'
import { indent } from './indent'
import { insertSoftBreak } from './insert-soft-break'
import { outdent } from './outdent'
import { exitBlock } from './exit-block'

function match({ editor }: { editor: Editor }) {
  return GlobalQueries.isInBlock(editor, 'code')
}

actions.override('insert-exit-break', insertExitBreak, { match })
actions.override('insert-soft-break', insertSoftBreak, { match })
actions.override('copy-all', copyAll, { match })
actions.override('indent', indent, { match })
actions.override('outdent', outdent, { match })
actions.override('exit-block', exitBlock, { match })
