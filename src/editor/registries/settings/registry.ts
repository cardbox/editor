import { createRegistry } from '../../lib/registry'
import { ElementSettings } from './types'
import { Element } from 'slate'

export const SettingsRegistry =
  createRegistry<Element['type'], ElementSettings>()
