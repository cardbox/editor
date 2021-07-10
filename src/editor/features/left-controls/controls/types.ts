import { Element } from 'slate'

export interface BlockMeta {
  empty: boolean
}

export interface ControlsState {
  element: Element
  meta: BlockMeta
  active: boolean
  setActive: (active: boolean) => void
}
