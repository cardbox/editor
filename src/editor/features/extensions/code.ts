import Prism from 'prismjs'
import { Editor, Location, Path, Range, Text, Transforms } from 'slate'
import { createCodeLineElement } from '../../elements/elements/code'
import { CodeElement, CodeLineElement } from '../../elements/types'
import { GlobalMatchers } from '../../lib/global-matchers'
import { GlobalQueries } from '../../lib/global-queries'

function toLeaf(token: string | Prism.Token): Text | Text[] {
  if (typeof token === 'string') return { text: token }

  if (typeof token.content === 'string')
    return {
      text: token.content,
      prismToken: token.type,
    }

  if (token.content instanceof Prism.Token) {
    return toLeaf(token.content)
  }

  let result: Text[] = []

  for (const childToken of token.content) {
    result = result.concat(toLeaf(childToken))
  }

  return result
}

interface Options {
  at?: Location
  updateSelection?: boolean
}

function updateHighlight(editor: Editor, options: Options = {}) {
  const { at = editor.selection, updateSelection = true } = options
  if (!at) return

  const line = GlobalQueries.getAbove<CodeLineElement>(editor, {
    at,
    type: 'block',
    match: GlobalMatchers.block(editor, 'code-line'),
  })

  const code = GlobalQueries.getAbove<CodeElement>(editor, {
    at,
    type: 'block',
    match: GlobalMatchers.block(editor, 'code'),
  })

  if (!line || !code) {
    return
  }

  const [codeNode] = code
  const [lineNode, linePath] = line

  const updatedText = Editor.string(editor, linePath)

  const leaves = Prism.tokenize(
    updatedText,
    Prism.languages[codeNode.language]
  ).flatMap(toLeaf)

  if (!updateSelection) return

  if (!editor.selection) return
  const childPath = editor.selection.anchor.path
  const childIndex = childPath[childPath.length - 1]

  let selectionOffset = editor.selection.anchor.offset
  for (const [index, child] of lineNode.children.entries()) {
    if (index === childIndex) break
    selectionOffset += child.text.length
  }

  Editor.withoutNormalizing(editor, () => {
    Transforms.removeNodes(editor, {
      at: linePath,
      match: GlobalMatchers.childOf(editor, lineNode),
    })

    Transforms.insertNodes(editor, leaves, {
      at: linePath.concat(0),
    })

    let charCount = 0
    let selected = false
    for (const [index, { text }] of leaves.entries()) {
      if (charCount + text.length < selectionOffset) {
        charCount += text.length
        continue
      }

      const offset = selectionOffset - charCount
      const point = { path: linePath.concat(index), offset }
      Transforms.select(editor, point)
      selected = true
      break
    }

    if (!selected) {
      Transforms.select(editor, linePath)
      Transforms.collapse(editor, { edge: 'end' })
    }
  })
}

export function code(editor: Editor): Editor {
  const { insertText, deleteBackward, deleteFragment, insertData } = editor

  editor.insertText = (text) => {
    insertText(text)
    updateHighlight(editor)
  }

  editor.deleteBackward = (unit) => {
    deleteBackward(unit)

    if (unit === 'block') {
      return
    }

    updateHighlight(editor)
  }

  editor.deleteFragment = (direction) => {
    deleteFragment(direction)
    updateHighlight(editor)

    const line = GlobalQueries.getAbove<CodeLineElement>(editor, {
      type: 'block',
      match: GlobalMatchers.block(editor, 'code-line'),
    })

    if (!line) return

    const code = GlobalQueries.getAbove<CodeElement>(editor, {
      type: 'block',
      match: GlobalMatchers.block(editor, 'code'),
    })

    if (!code) return

    const [codeNode] = code
    const [, linePath] = line

    const isSiblingLine = GlobalMatchers.builder(editor)
      .block('code-line')
      .childOf(codeNode)
      .compile()

    const prevLine = Editor.previous(editor, {
      at: linePath,
      match: isSiblingLine,
    })

    const nextLine = Editor.next(editor, {
      at: linePath,
      match: isSiblingLine,
    })

    if (prevLine) updateHighlight(editor, { at: prevLine[1] })
    if (nextLine) updateHighlight(editor, { at: nextLine[1] })
  }

  editor.insertData = (data) => {
    const line = GlobalQueries.getAbove(editor, {
      type: 'block',
      match: GlobalMatchers.block(editor, 'code-line'),
    })

    if (!line) {
      return insertData(data)
    }

    const code = GlobalQueries.getAbove<CodeElement>(editor, {
      type: 'block',
      match: GlobalMatchers.block(editor, 'code'),
    })

    if (!code) {
      return insertData(data)
    }

    if (!editor.selection) return

    if (Range.isExpanded(editor.selection)) {
      Editor.deleteFragment(editor)
    }

    const text = data.getData('text')

    const [codeNode] = code
    const [lineNode, linePath] = line

    const [firstText, ...restTexts] = text.split('\n')

    const currentLineText = Editor.string(editor, linePath)
    const updatedLineText = currentLineText + firstText

    const tokens = Prism.tokenize(
      updatedLineText,
      Prism.languages[codeNode.language]
    )

    Transforms.removeNodes(editor, {
      at: linePath,
      match: GlobalMatchers.childOf(editor, lineNode),
    })

    Transforms.insertNodes(editor, tokens.flatMap(toLeaf), {
      at: linePath.concat(0),
      select: restTexts.length === 0,
    })

    if (restTexts.length === 0) {
      return
    }

    let path = linePath
    for (const text of restTexts) {
      path = Path.next(path)
      const tokens = Prism.tokenize(text, Prism.languages[codeNode.language])
      Transforms.insertNodes(editor, createCodeLineElement([]), { at: path })
      Transforms.insertNodes(editor, tokens.flatMap(toLeaf), {
        at: path.concat(0),
      })
    }

    Transforms.select(editor, path)
    Transforms.collapse(editor, { edge: 'end' })
  }

  return editor
}
