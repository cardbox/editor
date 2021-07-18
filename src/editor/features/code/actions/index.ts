import { GlobalQueries } from '../../../lib/global-queries'
import { ActionsRegistry } from '../../../registries/actions'
import { copyAll } from './copy-all'
import { exitBlock } from './exit-block'
import { indent } from './indent'
import { insertExitBreak } from './insert-exit-break'
import { insertSoftBreak } from './insert-soft-break'
import { outdent } from './outdent'
import { Editor } from 'slate'

function match({ editor }: { editor: Editor }) {
  return GlobalQueries.isInBlock(editor, 'code')
}

ActionsRegistry.override('insert-exit-break', insertExitBreak, { match })
ActionsRegistry.override('insert-soft-break', insertSoftBreak, { match })
ActionsRegistry.override('copy-all', copyAll, { match })
ActionsRegistry.override('indent', indent, { match })
ActionsRegistry.override('outdent', outdent, { match })
ActionsRegistry.override('exit-block', exitBlock, { match })
