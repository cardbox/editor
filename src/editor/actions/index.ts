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

const actions = createActionController<Action, ActionParams>()

actions.register('insert-soft-break', insertSoftBreak)
actions.register('insert-exit-break', insertExitBreak)
actions.register('get-out-the-leaf', getOutTheLeaf)
actions.register('make-bold', makeBold)
actions.register('make-italic', makeItalic)
actions.register('make-underlined', makeUnderlined)
actions.register('make-inline-code', makeInlineCode)
actions.register('set-link-for-text', setLinkForText)

export { actions }
export * from './types'
