/* eslint-disable sonarjs/no-duplicate-string */
import React, { useEffect, useState, useRef } from 'react'
import { Element, Text } from 'slate'
import { Editor, EditorValue, useExtendedEditor } from './editor'

const initialState: EditorValue = [
  {
    type: 'heading-1',
    children: [{ text: 'Manage map or Set in effector store' }],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Sometimes we need to save Set in ' },
      { text: 'effector', italic: true, href: 'https://effector.dev' },
      { text: ' store.\nSimple ' },
      { text: 'createStore(new Set())', inlineCode: true },
      { text: ' ' },
      { text: 'will not', bold: true },
      { text: ' trigger updates on ' },
      { text: '.add(item)', inlineCode: true },
    ],
  },
  {
    type: 'unordered-list',
    children: [
      {
        type: 'list-item',
        children: [
          { type: 'paragraph', children: [{ text: 'a' }] },
          {
            type: 'unordered-list',
            children: [
              {
                type: 'list-item',
                children: [
                  { type: 'paragraph', children: [{ text: 'nested' }] },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          { type: 'paragraph', children: [{ text: 'b' }] },
          {
            type: 'unordered-list',
            children: [
              {
                type: 'list-item',
                children: [
                  { type: 'paragraph', children: [{ text: 'nested' }] },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          { type: 'paragraph', children: [{ text: 'c' }] },
          {
            type: 'unordered-list',
            children: [
              {
                type: 'list-item',
                children: [
                  { type: 'paragraph', children: [{ text: 'nested' }] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: 'ordered-list',
    children: [
      {
        type: 'list-item',
        children: [
          { type: 'paragraph', children: [{ text: 'a' }] },
          {
            type: 'ordered-list',
            children: [
              {
                type: 'list-item',
                children: [
                  { type: 'paragraph', children: [{ text: 'nested' }] },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          { type: 'paragraph', children: [{ text: 'b' }] },
          {
            type: 'ordered-list',
            children: [
              {
                type: 'list-item',
                children: [
                  { type: 'paragraph', children: [{ text: 'nested' }] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: 'code',
    children: [
      {
        type: 'code-line',
        children: [{ text: 'const foo = 123;' }],
      },
      {
        type: 'code-line',
        children: [{ text: '' }],
      },
      {
        type: 'code-line',
        children: [{ text: 'const bar = 321;' }],
      },
    ],
    language: 'tsx',
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
  console.group('editor value changed')
  console.log(string)
  console.groupEnd()
}

function useEditorValue() {
  const [value, setValue] = useState<EditorValue>(initialState)
  useEffect(() => printValue(value), [value])

  return [value, setValue] as const
}

export const App = () => {
  const editor = useExtendedEditor()
  const [value, setValue] = useEditorValue()
  const valueRef = useRef(value)

  useEffect(() => {
    valueRef.current = value
  }, [value])

  useEffect(() => {
    ;(window as any).getEditorValue = () => value
    console.log('To print current value of editor run `getEditorValue()`')
  }, [])

  return <Editor editor={editor} value={value} onChange={setValue} />
}
