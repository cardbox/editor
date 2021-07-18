import { ActionsRegistry } from '../registries/actions'
import { copy } from './copy'
import { copyAll } from './copy-all'
import { deleteBackward } from './delete-backward'
import { exitBlock } from './exit-block'
import { getOutTheLeaf } from './get-out-the-leaf'
import { indent } from './indent'
import { insertExitBreak } from './insert-exit-break'
import { insertSoftBreak } from './insert-soft-break'
import { makeBold } from './make-bold'
import { makeInlineCode } from './make-inline-code'
import { makeItalic } from './make-italic'
import { makeUnderlined } from './make-underlined'
import { outdent } from './outdent'
import { paste } from './paste'
import { setLinkForText } from './set-link-for-text'

ActionsRegistry.register('delete-backward', deleteBackward)
ActionsRegistry.register('insert-soft-break', insertSoftBreak)
ActionsRegistry.register('insert-exit-break', insertExitBreak)
ActionsRegistry.register('indent', indent)
ActionsRegistry.register('outdent', outdent)
ActionsRegistry.register('get-out-the-leaf', getOutTheLeaf)
ActionsRegistry.register('make-bold', makeBold)
ActionsRegistry.register('make-italic', makeItalic)
ActionsRegistry.register('make-underlined', makeUnderlined)
ActionsRegistry.register('make-inline-code', makeInlineCode)
ActionsRegistry.register('set-link-for-text', setLinkForText)
ActionsRegistry.register('copy', copy)
ActionsRegistry.register('copy-all', copyAll)
ActionsRegistry.register('paste', paste)
ActionsRegistry.register('exit-block', exitBlock)
