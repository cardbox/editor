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

## Architecture

[Excalidraw](https://excalidraw.com/#json=4811335044956160,DJxYluN2Ua3_wl756Fv62A)
