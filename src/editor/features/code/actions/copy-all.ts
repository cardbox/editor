import { Transforms } from 'slate'
import { ActionParams } from '../../../actions'
import { ActionCallback } from '../../../lib/action-controller/types'
import { GlobalMatchers } from '../../../lib/global-matchers'
import { GlobalQueries } from '../../../lib/global-queries'

export const copyAll: ActionCallback<ActionParams> = ({ editor, event }) => {
  const code = GlobalQueries.getAbove(editor, {
    type: 'block',
    match: GlobalMatchers.block(editor, 'code'),
  })

  if (!code) {
    return { skipped: true }
  }

  const [, codePath] = code

  event.preventDefault()
  Transforms.select(editor, codePath)
}