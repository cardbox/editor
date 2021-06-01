import { createActionController } from '../lib/action-controller'
import { insertExitBreak } from './insert-exit-break'
import { insertSoftBreak } from './insert-soft-break'
import { makeBold } from './make-bold'
import { makeItalic } from './make-italic'
import { makeUnderlined } from './make-underlined'
import { makeInlineCode } from './make-inline-code'

export const actionController = createActionController()

actionController.register('insert-soft-break', insertSoftBreak)
actionController.register('insert-exit-break', insertExitBreak)
actionController.register('make-bold', makeBold)
actionController.register('make-italic', makeItalic)
actionController.register('make-underlined', makeUnderlined)
actionController.register('make-inline-code', makeInlineCode)
