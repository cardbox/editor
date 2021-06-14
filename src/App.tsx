/* eslint-disable sonarjs/no-duplicate-string */
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { Editor, EditorValue } from './editor'

const initialState: EditorValue = [
  {
    id: nanoid(),
    type: 'heading-1',
    children: [
      {
        text: 'Manage map or Set in effector store',
      },
    ],
  },
  {
    id: nanoid(),
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
  {
    id: nanoid(),
    type: 'unordered-list',
    children: [
      {
        id: nanoid(),
        type: 'list-item',
        children: [
          {
            id: nanoid(),
            type: 'list-item-content',
            children: [{ text: 'a' }],
          },
          {
            id: nanoid(),
            type: 'unordered-list',
            children: [
              {
                id: nanoid(),
                type: 'list-item',
                children: [
                  {
                    id: nanoid(),
                    type: 'list-item-content',
                    children: [{ text: 'nested' }],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: nanoid(),
        type: 'list-item',
        children: [
          {
            id: nanoid(),
            type: 'list-item-content',
            children: [{ text: 'b' }],
          },
          {
            id: nanoid(),
            type: 'unordered-list',
            children: [
              {
                id: nanoid(),
                type: 'list-item',
                children: [
                  {
                    id: nanoid(),
                    type: 'list-item-content',
                    children: [{ text: 'nested' }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    type: 'ordered-list',
    children: [
      {
        id: nanoid(),
        type: 'list-item',
        children: [
          {
            id: nanoid(),
            type: 'list-item-content',
            children: [{ text: 'a' }],
          },
          {
            id: nanoid(),
            type: 'ordered-list',
            children: [
              {
                id: nanoid(),
                type: 'list-item',
                children: [
                  {
                    id: nanoid(),
                    type: 'list-item-content',
                    children: [{ text: 'nested' }],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: nanoid(),
        type: 'list-item',
        children: [
          {
            id: nanoid(),
            type: 'list-item-content',
            children: [{ text: 'b' }],
          },
          {
            id: nanoid(),
            type: 'ordered-list',
            children: [
              {
                id: nanoid(),
                type: 'list-item',
                children: [
                  {
                    id: nanoid(),
                    type: 'list-item-content',
                    children: [{ text: 'nested' }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

function useEditorValue() {
  const [value, setValue] = useState<EditorValue>(initialState)

  useEffect(() => {
    console.log('value', value)
  }, [value])

  return [value, setValue] as const
}

export const App = () => {
  const [value, setValue] = useEditorValue()

  return <Editor value={value} onChange={setValue} />
}
