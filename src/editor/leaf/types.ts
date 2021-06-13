import { LeafModifications } from '../types'

export type LeafElement = {
  text: string
  href?: string
} & LeafModifications
