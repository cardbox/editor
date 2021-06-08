import { ClipboardEvent } from 'react'
import { useEditor } from '../../lib/hooks/use-editor'
import { useUI } from '../../lib/hooks/use-ui'
import { createListener } from '../../lib/listeners'
import { link } from './paste/link'
import { ClipboardListenerParams } from './paste/types'

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
