import { ClipboardEvent } from 'react'
import { BaseListenerParams, ChildListener } from '../../../lib/listeners/types'
import { EditorListenerParams } from '../types'

export type ClipboardListenerParams = EditorListenerParams &
  BaseListenerParams<ClipboardEvent>
export type PasteListener = ChildListener<ClipboardListenerParams>
