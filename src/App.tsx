/* eslint-disable sonarjs/no-duplicate-string */
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { Element, Text } from 'slate'
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
            type: 'paragraph',
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
                    type: 'paragraph',
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
            type: 'paragraph',
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
                    type: 'paragraph',
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
            type: 'paragraph',
            children: [{ text: 'c' }],
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
                    type: 'paragraph',
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
            type: 'paragraph',
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
                    type: 'paragraph',
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
            type: 'paragraph',
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
                    type: 'paragraph',
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

interface TreeEntry {
  name: string
  offset: number
}

function buildPlainValueTree(
  children: Array<Element | Text>,
  offset = 0,
  result: TreeEntry[] = []
) {
  for (const child of children) {
    if (Text.isText(child)) continue

    result.push({ name: child.type, offset })

    buildPlainValueTree(child.children, offset + 2, result)
  }

  return result
}

function printValue(value: EditorValue) {
  const valueTree = buildPlainValueTree(value)
  const strings: string[] = []

  for (const item of valueTree) {
    const spaces = ' '.repeat(item.offset)
    strings.push(spaces + item.name)
  }

  const string = strings.join('\n')
  console.log(string)
}

function useEditorValue() {
  const [value, setValue] = useState<EditorValue>(initialState)
  useEffect(() => printValue(value), [value])
  return [value, setValue] as const
}

export const App = () => {
  const [value, setValue] = useEditorValue()

  return <Editor value={value} onChange={setValue} />
}
