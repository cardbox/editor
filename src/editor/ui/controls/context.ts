import { createContext, useContext } from 'react'
import { ControlsState } from './types'

const ControlsContext = createContext<ControlsState>({} as ControlsState)

export const ControlsProvider = ControlsContext.Provider

export function useControlsState() {
  return useContext(ControlsContext)
}
