import { WithCode } from '../features/code'
import { WithLink } from '../features/link'
import { WithTextModifications } from '../features/text-modifications'
import { BaseText } from 'slate'

export type CustomLeaf = BaseText & WithLink & WithCode & WithTextModifications
