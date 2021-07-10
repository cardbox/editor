import { BaseListenerParams, ChildListener } from '../../../lib/listeners/types'
import { EditorListenerParams } from '../types'
import { ClipboardEvent } from 'react'

export type ClipboardListenerParams = EditorListenerParams &
  BaseListenerParams<ClipboardEvent>
export type PasteListener = ChildListener<ClipboardListenerParams>
