import { createActionController } from '../lib/action-controller'
import { handler as insertExitBreak } from './insert-exit-break'
import { handler as insertSoftBreak } from './insert-soft-break'
import { handler as makeBold } from './make-bold'
import { handler as makeItalic } from './make-italic'
import { handler as makeUnderlined } from './make-underlined'
import { handler as makeInlineCode } from './make-inline-code'

export const actionController = createActionController()

actionController.register('insert-soft-break', insertSoftBreak)
actionController.register('insert-exit-break', insertExitBreak)
actionController.register('make-bold', makeBold)
actionController.register('make-italic', makeItalic)
actionController.register('make-underlined', makeUnderlined)
actionController.register('make-inline-code', makeInlineCode)
