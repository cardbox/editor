import { actions } from '../../../actions'
import { EditorQueries } from '../../../lib/editor-queries'
import { insertExitBreak } from './insert-exit-break'

actions.override('insert-exit-break', insertExitBreak, {
  match: ({ editor }) => {
    const listEntry = EditorQueries.getAbove(editor, {
      type: 'block',
      match: (block) => {
        return block.type === 'ordered-list' || block.type === 'unordered-list'
      },
    })

    return Boolean(listEntry)
  },
})
