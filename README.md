# @cardbox/editor

[Demo](https://cardbox.github.io/editor/)

## Install as a library

First, install the main package:

```sh
yarn add @cardbox/editor
```

Second, install the peer dependencies:

```
yarn add react@^16.8.6 react-dom@^16.8.6 styled-components@^5.1.1 tippy.js@^6.3.1 @tippyjs/react@^4.2.5
```

Then, use it:

```tsx
import {
  Editor, // component
  EditorValue, // value type
} from '@cardbox/editor'

const MyEditor = () => {
  const [value, setValue] = useState<EditorValue>([])

  return (
    <Editor
      value={value}
      onChange={setValue} 
      readOnly={false} /* optional */
    />
  )
}
```

## Usage

### Text modifications

- Bold: `⌘+B`
- Italic: `⌘+I`
- Underlined: `⌘+U`
- Inline-code: `⌘+E`
- Link: `⌘+K` (opens a tooltip)

Also you can use the buttons located in the toolbar.

### Lists

Write `-` + space to create an unordered list.

Write `1.` or `1)` + space to create an ordered list.

Use `Tab` and `Shift+Tab` to manage the items nesting level.

### Code blocks

Use `Tab` to indent, `Shift+Tab` to outdent.

Use `⌘+Enter` to step out the code block.

Write ``` to create the code block.

## Styles

```css
:root {
    --editor-font-family: 'Open Sans', sans-serif;
    --editor-font-size: 16px;
    --editor-line-height: 24px;

    --editor-mod-bold-font-weight: 600;
    --editor-mod-inline-code-font-family: 'Source Code Pro', monospace;
    --editor-mod-inline-code-padding: 4px 6px;
    --editor-mod-inline-code-background: #f7f6f9;
    --editor-mod-inline-code-border-radius: 6px;
    --editor-mod-link-color: rgb(75, 50, 195);

    --editor-paragraph-margin: 1em 0;

    --editor-heading1-margin: 0.67em 0;
    --editor-heading1-font-size: 30px;
    --editor-heading1-line-height: 36px;
    --editor-heading1-font-weight: 400;

    --editor-list-margin: 1em 0;
    --editor-list-padding: 0 0 0 24px;
  }
```

## Architecture

[Excalidraw](https://excalidraw.com/#json=6706229653012480,_5pkV-mh3Dsc5O_e3czi6g)
