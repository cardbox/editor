import { createGlobalStyle } from 'styled-components'

export const Theme = createGlobalStyle`
  /**
  * Nord Theme Originally by Arctic Ice Studio
  * https://nordtheme.com
  *
  * Ported for PrismJS by Zane Hitchcoxc (@zwhitchcox) and Gabriel Ramos (@gabrieluizramos)
  */

  pre[data-language] {
    color: var(--nord-base-color);
    background: none;
    font-family: "Source Code Pro", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    line-height: 1.5;
    tab-size: 2;
    hyphens: none;

    word-break: normal;
    word-spacing: normal;
    white-space: pre;
    overflow-wrap: break-word;
  }

  pre[data-language] > div {
    display: block;
    position: relative;
    overflow-wrap: normal;
    white-space: pre;
  }

  /* Code blocks */
  pre[data-language] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    border-radius: 0.3em;
    background: var(--nord-base-background);
  }
  
  .token.comment,
  .token.shebang {
    font-style: italic;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.shebang {
    color: var(--nord-comment);
  }

  .token.punctuation {
    color: var(--nord-punctuation);
  }

  .namespace {
    opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted,
  .token.key {
    color: var(--nord-property);
  }

  .token.number {
    color: var(--nord-number);
  }

  .token.boolean {
    color: var(--nord-boolean);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted,
  .token.directive {
    color: var(--nord-selector);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable,
  .token.property-query {
    color: var(--nord-operator);
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: var(--nord-function);
  }

  .token.keyword,
  .token.table {
    color: var(--nord-keyword);
  }

  .token.regex,
  .token.important {
    color: var(--nord-regex);
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`

export const NordLightTheme = createGlobalStyle`
  :root {
    --nord-selector: #7f9f64;
    --nord-base-background: #ECEFF4;
    --nord-base-color: #2E3440;
    /* --nord-comment: #81A1C1; */
    --nord-comment: #a7a7a7;
    --nord-number: #B48EAD;
    --nord-function: #5E81AC;
    --nord-regex: #D08770;
    --nord-punctuation: #4C566A;
    --nord-property: #B48EAD;
    --nord-boolean: #BF616A;
    --nord-keyword: #81A1C1;
    --nord-operator: #4C566A;
  }
`

export const NordDarkTheme = createGlobalStyle`
  :root {
    --nord-selector: #A3BE8C;
    --nord-base-background: #2E3440;
    --nord-base-color: #f8f8f2;
    --nord-comment: #636f88;
    --nord-number: #B48EAD;
    --nord-function: #88C0D0;
    --nord-regex: #EBCB8B;
    --nord-punctuation: #81A1C1;
    --nord-property: #81A1C1;
    --nord-boolean: #81A1C1;
    --nord-keyword: #81A1C1;
    --nord-operator: #81A1C1;
  }
`
