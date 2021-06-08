import React, { useEffect, useState } from 'react'
import { Editor, EditorValue } from './editor'

const initialState: EditorValue = [
  {
    type: 'heading-1',
    children: [
      {
        text: 'Manage map or Set in effector store',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Sometimes we need to save Set in ',
      },
      {
        text: 'effector',
        italic: true,
        href: 'https://effector.dev',
      },
      {
        text: ' store.\nSimple ',
      },
      {
        text: 'createStore(new Set())',
        inlineCode: true,
      },
      {
        text: ' ',
      },
      {
        text: 'will not',
        bold: true,
      },
      {
        text: ' trigger updates on ',
      },
      {
        text: '.add(item)',
        inlineCode: true,
      },
    ],
  },
]

function useEditorValue() {
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
