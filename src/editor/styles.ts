import styled, { createGlobalStyle } from 'styled-components'

export const TippyStyles = createGlobalStyle`
  .tippy-box[data-animation='fade'][data-state='hidden'] {
    opacity: 0;
  }

  [data-tippy-root] {
    max-width: calc(100vw - 10px);
  }

  .tippy-box {
    position: relative;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.4;
    outline: 0;
    transition-property: transform, visibility, opacity;
  }

  .tippy-box[data-placement^='top'] > .tippy-arrow {
    bottom: 0;
  }

  .tippy-box[data-placement^='top'] > .tippy-arrow:before {
    bottom: -7px;
    left: 0;
    border-width: 8px 8px 0;
    border-top-color: initial;
    transform-origin: center top;
  }

  .tippy-box[data-placement^='bottom'] > .tippy-arrow {
    top: 0;
  }

  .tippy-box[data-placement^='bottom'] > .tippy-arrow:before {
    top: -7px;
    left: 0;
    border-width: 0 8px 8px;
    border-bottom-color: initial;
    transform-origin: center bottom;
  }

  .tippy-box[data-placement^='left'] > .tippy-arrow {
    right: 0;
  }

  .tippy-box[data-placement^='left'] > .tippy-arrow:before {
    border-width: 8px 0 8px 8px;
    border-left-color: initial;
    right: -7px;
    transform-origin: center left;
  }

  .tippy-box[data-placement^='right'] > .tippy-arrow {
    left: 0;
  }

  .tippy-box[data-placement^='right'] > .tippy-arrow:before {
    left: -7px;
    border-width: 8px 8px 8px 0;
    border-right-color: initial;
    transform-origin: center right;
  }

  .tippy-box[data-inertia][data-state='visible'] {
    transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
  }

  .tippy-arrow {
    width: 16px;
    height: 16px;
    color: #333;
  }

  .tippy-arrow:before {
    content: '';
    position: absolute;
    border-color: transparent;
    border-style: solid;
  }

  .tippy-content {
    position: relative;
    padding: 5px 9px;
    z-index: 1;
  }

  /* Themes */

  .tippy-box[data-theme~='editor-default'] .tippy-content {
    font-family: 'Open Sans';
  }

  .tippy-box[data-theme~='editor-toolbar'] .tippy-content {
    padding: 0;
  }

  .tippy-box[data-theme~='editor-link-popup'] .tippy-content {
    padding: 0;
  }

  .tippy-box[data-theme~='editor-keybind'] .tippy-content {
    font-size: 12px;
  }
`

export const StyledEditor = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 24px;

  a {
    color: rgb(75, 50, 195);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  code {
    font-family: 'Source Code Pro', monospace;
    padding: 4px 6px;
    background: #f7f6f9;
    border-radius: 6px;
  }

  b {
    font-weight: 600;
  }

  h1 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 400;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }

  ol,
  ul {
    padding-left: 24px;
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
