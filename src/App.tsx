import React, { useEffect, useState } from 'react'
import { Editor, EditorValue } from './editor'

function useEditorValue() {
  const initialState: EditorValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]

  const [value, setValue] = useState<EditorValue>(initialState)

  useEffect(() => {
    console.log(JSON.stringify(value, null, 2))
  }, [value])

  return [value, setValue] as const
}

export const App = () => {
  const [value, setValue] = useEditorValue()

  return <Editor value={value} onChange={setValue} />
}
