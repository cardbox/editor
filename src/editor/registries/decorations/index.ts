import { createDecorationController } from '../../lib/decoration-controller'

/*
 * It goes in 'decorate' prop of Editable
 * 'decorate' is used on nodes between 'renderElement' and 'renderLeaf'
 *
 * This is a good instrument for splitting the text on render stage
 * (for example, code highlighting)
 */
export const decorations = createDecorationController()
