import { createGlobalStyle } from 'styled-components'

export const DarkTheme = createGlobalStyle`
  .tippy-box[data-theme~='editor-dark'] {
    --text-color: #fff;
    --background-color: #333;
    --border-color: var(--background-color);

    box-shadow: 0px 2px 3px #F2F3F5;
  }
`
