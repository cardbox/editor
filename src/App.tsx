import React, { useEffect, useState } from 'react'
import { Editor, EditorValue } from './editor'
import { createParagraphComponent } from './editor/elements'
import { createHeading1Component } from './editor/elements/heading-1'

function useEditorValue() {
  const initialState: EditorValue = [
    createHeading1Component('Manage map or Set in effector store'),
    createParagraphComponent(
      'Sometimes we need to save Set in effector store.' +
        '\nSimple createStore(new Set) will not trigger updates on .add(item)'
    ),
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
