import { createActionController } from '../lib/action-controller'
import { handler as makeBold } from './make-bold'
import { handler as makeItalic } from './make-italic'
import { handler as makeUnderlined } from './make-underlined'
import { handler as makeInlineCode } from './make-inline-code'

export const actionController = createActionController()

actionController.register('make-bold', makeBold)
actionController.register('make-italic', makeItalic)
actionController.register('make-underlined', makeUnderlined)
actionController.register('make-inline-code', makeInlineCode)
