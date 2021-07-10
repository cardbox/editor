import { DarkTheme } from './dark.theme'
import { EditorTheme } from './editor.theme'
import { ElementsThemes } from './elements.themes'
import { LightTheme } from './light.theme'
import React from 'react'

export const GlobalStyles = () => {
  return (
    <>
      <EditorTheme />
      <DarkTheme />
      <LightTheme />
      <ElementsThemes />
    </>
  )
}
