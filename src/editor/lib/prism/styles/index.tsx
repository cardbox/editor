import React from 'react'
import { NordLightTheme, Theme } from './nord.theme'

export const GlobalStyles = () => {
  return (
    <>
      <Theme />
      {/*<NordDarkTheme />*/}
      <NordLightTheme />
    </>
  )
}
