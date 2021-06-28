import styled, { createGlobalStyle } from 'styled-components'

export const RootGlobalStyles = createGlobalStyle`
  :root {
    --editor-font-family: 'Open Sans', sans-serif;
    --editor-font-size: 15px;
    --editor-line-height: 1.6;
    --editor-color: #000;

    --editor-controls-container-width: 50px;
    --editor-controls-container-padding: 0 15px 0 0;
    --editor-controls-container-background: #ffffff;

    --editor-mod-bold-font-weight: 600;
    --editor-mod-inline-code-font-family: 'Source Code Pro', monospace;
    --editor-mod-inline-code-padding: 4px 6px;
    --editor-mod-inline-code-background: #f7f6f9;
    --editor-mod-inline-code-border-radius: 6px;
    --editor-mod-link-color: rgb(75, 50, 195);

    --editor-paragraph-margin: 1em 0;

    --editor-heading1-margin: 1em 0;
    --editor-heading1-font-size: 24px;
    --editor-heading1-line-height: 1;
    --editor-heading1-font-weight: 400;

    --editor-list-margin: 1em 0;
    --editor-list-padding: 0 0 0 24px;
  }
`

export const StyledEditor = styled.div`
  & * {
    box-sizing: border-box;
  }

  font-family: var(--editor-font-family);
  font-size: var(--editor-font-size);
  line-height: var(--editor-line-height);
  color: var(--editor-color);

  .element-container {
    position: relative;
  }

  .element-container .controls {
    display: flex;
    flex-direction: row-reverse;
    box-sizing: border-box;
    padding: var(--editor-controls-container-padding);
    position: absolute;
    width: var(--editor-controls-container-width);
    height: 100%;
    left: 0;
    top: 0;

    background: var(--editor-controls-container-background);
    user-select: none;

    opacity: 0;
    transition: opacity 400ms ease 0s;
  }

  .element-container .controls:hover {
    opacity: 1;
  }

  .element-container.first-level.visible > .controls {
    opacity: 1;
  }

  .element-container.first-level > .content {
    padding-left: var(--editor-controls-container-width);
  }

  .element-container .controls .block-menu-icon {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #82869b;
    background: #ffffff;
    border: 1px solid #bfc2d1;
    border-radius: 50%;
    cursor: pointer;

    transition: color 400ms ease, background 400ms ease;

    &:hover {
      background: #efefef;
    }

    &.active {
      color: #ffffff;
      background: #333333;
    }

    & > svg {
      transition: transform 400ms ease;
    }

    &.active.plus > svg {
      transform: rotate(45deg);
    }

    &.active.arrow > svg {
      transform: rotate(180deg);
    }
  }

  a {
    color: var(--editor-mod-link-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  code {
    font-family: var(--editor-mod-inline-code-font-family);
    padding: var(--editor-mod-inline-code-padding);
    background: var(--editor-mod-inline-code-background);
    border-radius: var(--editor-mod-inline-code-border-radius);
  }

  b {
    font-weight: var(--editor-mod-bold-font-weight);
  }

  p {
    margin: var(--editor-paragraph-margin);
  }

  h1 {
    margin: var(--editor-heading1-margin);
    font-size: var(--editor-heading1-font-size);
    line-height: var(--editor-heading1-line-height);
    font-weight: var(--editor-heading1-font-weight);
  }

  ol,
  ul {
    margin: var(--editor-list-margin);
    padding: var(--editor-list-padding);
  }

  ul ul,
  ol ol {
    margin: 0;
  }

  ol ol {
    list-style-type: lower-roman;
  }

  ol ol ol {
    list-style-type: lower-alpha;
  }

  li p {
    margin-top: 0;
    margin-bottom: 0;
  }

  .toolbar-container {
    display: flex;
    padding: 6px;
    user-select: none;
  }

  .link-popup-container {
    width: 280px;
    padding: 8px;
  }
`
