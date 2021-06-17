# @cardbox/editor

[Demo](https://cardbox.github.io/editor/)

## Install as a library

First, install the main package:

```sh
yarn add @cardbox/editor
```

Second, install the peer dependencies:

```
yarn add react@^17.0.0 react-dom@^17.0.0 tippy.js@^6.3.1 @tippyjs/react@^4.2.5
```

Then, use it:

```tsx
import {
  Editor, // component
  EditorValue, // value type
} from '@cardbox/editor'

import 'tippy.js/dist/tippy.css'
import '@cardbox/editor/dist/editor.css'

const MyEditor = () => {
  const initialValue: EditorValue = [
    {
      id: nanoid(), // any unique string
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]

  const [value, setValue] = useState(initialValue)

  return (
    <Editor
      value={value}
      onChange={setValue} 
      readOnly={false} /* optional */
    />
  )
}
```

## Architecture

[Excalidraw](https://excalidraw.com/#json=4811335044956160,DJxYluN2Ua3_wl756Fv62A)
