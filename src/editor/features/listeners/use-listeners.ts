import { useEditor } from '../../lib/hooks/slate'
import { useUI } from '../../lib/hooks/use-ui'
import { createListener } from '../../lib/listeners'
import { link } from './paste/link'
import { ClipboardListenerParams } from './paste/types'
import { ClipboardEvent } from 'react'

export function useListeners() {
  const editor = useEditor()
  const ui = useUI()

  const handlePaste = createListener<ClipboardEvent, ClipboardListenerParams>(
    {
      editor,
      ui,
    },
    [link]
  )

  return {
    handlePaste,
  }
}
