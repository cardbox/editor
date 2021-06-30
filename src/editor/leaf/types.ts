import { LeafModifications } from '../types'

export type LeafElement = {
  text: string
  href?: string
  prismToken?: string
} & LeafModifications
