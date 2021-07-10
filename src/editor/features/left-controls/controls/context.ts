import { ControlsState } from './types'
import { createContext, useContext } from 'react'

const ControlsContext = createContext<ControlsState>({} as ControlsState)

export const ControlsProvider = ControlsContext.Provider

export function useControlsState() {
  return useContext(ControlsContext)
}
