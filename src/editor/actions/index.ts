import { createActionController } from '../lib/action-controller'
import { insertExitBreak } from './insert-exit-break'
import { insertSoftBreak } from './insert-soft-break'
import { makeBold } from './make-bold'
import { makeItalic } from './make-italic'
import { makeUnderlined } from './make-underlined'
import { makeInlineCode } from './make-inline-code'
import { getOutTheLeaf } from './get-out-the-leaf'
import { Action, ActionParams } from './types'
import { setLinkForText } from './set-link-for-text'
import { deleteBackward } from './delete-backward'
import { indent } from './indent'
import { outdent } from './outdent'
import { copy } from './copy'
import { paste } from './paste'
import { copyAll } from './copy-all'
import { exitBlock } from './exit-block'

const actions = createActionController<Action, ActionParams>()

actions.register('delete-backward', deleteBackward)
actions.register('insert-soft-break', insertSoftBreak)
actions.register('insert-exit-break', insertExitBreak)
actions.register('indent', indent)
actions.register('outdent', outdent)
actions.register('get-out-the-leaf', getOutTheLeaf)
actions.register('make-bold', makeBold)
actions.register('make-italic', makeItalic)
actions.register('make-underlined', makeUnderlined)
actions.register('make-inline-code', makeInlineCode)
actions.register('set-link-for-text', setLinkForText)
actions.register('copy', copy)
actions.register('copy-all', copyAll)
actions.register('paste', paste)
actions.register('exit-block', exitBlock)

export { actions }
export * from './types'
