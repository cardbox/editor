import { GlobalQueries } from '../../lib/global-queries'
import { GlobalTransforms } from '../../lib/global-transforms'
import { Editor, Element, Range, Text, Transforms } from 'slate'

interface SkipParams {
  block: Element
  leaf: Text
}

interface Common {
  trigger?: string
  keepTrigger?: boolean
  skip?: (params: SkipParams) => boolean
}

interface MarkupAfter {
  markupType: 'after'
  markup: string[]
  onlyOnBlockStart?: boolean
}

interface MarkupBetween {
  markupType: 'between'
  markup: [string, string]
}

type Markup = MarkupAfter | MarkupBetween

interface TransformParams {
  text: string
  block: Element
  leaf: Text
}

interface TransformBlock {
  transformType: 'block'
  transform: (params: TransformParams) => Element
}

interface TransformLeaf {
  transformType: 'leaf'
  transform: (params: TransformParams) => Text
}

type Transform = TransformBlock | TransformLeaf

type ConfigEntry = Common & Markup & Transform

type Config = ConfigEntry[]

type CheckResult =
  | {
      match: true
      range: Range
    }
  | {
      match: false
    }

function checkAfter({
  editor,
  entry,
}: {
  editor: Editor
  entry: ConfigEntry & MarkupAfter
}): CheckResult {
  if (entry.onlyOnBlockStart) {
    return checkAfterOnStart({ editor, entry })
  }

  if (!editor.selection)
    return {
      match: false,
    }

  const range = GlobalQueries.getRangeBefore(editor, {
    matchString: entry.markup,
  })

  if (!range)
    return {
      match: false,
    }

  return {
    match: true,
    range,
  }
}

function checkAfterOnStart({
  editor,
  entry,
}: {
  editor: Editor
  entry: ConfigEntry & MarkupAfter
}): CheckResult {
  const range = GlobalQueries.getRangeFromBlockStart(editor)
  if (!range) return { match: false }

  const string = Editor.string(editor, range)
  if (!string) return { match: false }

  if (!entry.markup.includes(string)) {
    return { match: false }
  }

  return {
    match: true,
    range,
  }
}

function checkBetween({
  editor,
  entry,
}: {
  editor: Editor
  entry: ConfigEntry & MarkupBetween
}): CheckResult {
  const [startChar, endChar] = entry.markup

  const end = GlobalQueries.getPointBefore(editor, {
    edge: 'end',
    matchString: endChar,
    failOnInvalid: true,
  })

  if (!end)
    return {
      match: false,
    }

  const startSearchPoint = Editor.before(editor, end)

  if (!startSearchPoint)
    return {
      match: false,
    }

  const start = GlobalQueries.getPointBefore(editor, {
    at: startSearchPoint,
    edge: 'start',
    matchString: startChar,
  })

  if (!start)
    return {
      match: false,
    }

  const range: Range = {
    anchor: start,
    focus: end,
  }

  return {
    match: true,
    range,
  }
}

function replaceBlock({
  editor,
  entry,
  range,
  text,
  block,
  leaf,
}: {
  editor: Editor
  entry: ConfigEntry & TransformBlock
  range: Range
  text: string
  block: Element
  leaf: Text
}) {
  const updated = entry.transform({ text, block, leaf })

  Transforms.delete(editor, { at: range })

  if (entry.markupType === 'after' && entry.onlyOnBlockStart) {
    const blockEntry = GlobalQueries.getAbove(editor, {
      type: 'block',
      mode: 'lowest',
    })

    if (blockEntry) {
      const [, blockPath] = blockEntry

      Transforms.delete(editor, {
        at: blockPath,
        unit: 'block',
      })
    }
  }

  Editor.insertNode(editor, updated)
}

function replaceLeaf({
  editor,
  entry,
  range,
  text,
  block,
  leaf,
}: {
  editor: Editor
  entry: ConfigEntry & TransformLeaf
  range: Range
  text: string
  block: Element
  leaf: Text
}) {
  const updated = entry.transform({ text, block, leaf })

  Transforms.delete(editor, { at: range })
  Transforms.insertNodes(editor, updated, {
    at: range.anchor,
    select: true,
  })
}

function getText({
  editor,
  entry,
  range,
}: {
  editor: Editor
  entry: ConfigEntry
  range: Range
}) {
  const originalString = Editor.string(editor, range)
  if (!originalString) return

  if (entry.markupType === 'after') {
    return ''
  }

  const [start, end] = entry.markup
  return originalString.slice(start.length, -end.length)
}

function replaceAtRange({
  editor,
  entry,
  range,
  insertText,
}: {
  editor: Editor
  entry: ConfigEntry
  range: Range
  insertText: (text: string) => void
}) {
  const { trigger = ' ', keepTrigger = true } = entry

  const text = getText({ editor, entry, range })
  if (typeof text !== 'string') return

  Transforms.delete(editor, { at: range })

  const blockEntry = GlobalQueries.getAbove(editor, { type: 'block' })
  const leafEntry = GlobalQueries.getAbove(editor, { type: 'leaf' })
  if (!blockEntry) return
  if (!leafEntry) return
  const [block] = blockEntry
  const [leaf] = leafEntry

  const result =
    entry.transformType === 'block'
      ? replaceBlock({ editor, entry, range, text, block, leaf })
      : replaceLeaf({ editor, entry, range, text, block, leaf })

  if (keepTrigger) {
    if (entry.transformType === 'leaf') {
      GlobalTransforms.getOutTheLeaf(editor)
    } else {
      insertText(trigger)
    }
  }

  return result
}

function processEntry({
  text,
  editor,
  entry,
  insertText,
}: {
  text: string
  editor: Editor
  entry: ConfigEntry
  insertText: (text: string) => void
}): CheckResult {
  const { trigger = ' ', skip = () => false } = entry

  if (text !== trigger) {
    return { match: false }
  }

  const blockEntry = GlobalQueries.getAbove(editor, { type: 'block' })
  const leafEntry = GlobalQueries.getAbove(editor, { type: 'leaf' })
  if (!blockEntry) return { match: false }
  if (!leafEntry) return { match: false }
  const [block] = blockEntry
  const [leaf] = leafEntry

  if (skip({ block, leaf })) {
    return { match: false }
  }

  let check: CheckResult

  if (entry.markupType === 'after') {
    check = checkAfter({ editor, entry })
  } else {
    check = checkBetween({ editor, entry })
  }

  if (check.match) {
    replaceAtRange({
      editor,
      entry,
      range: check.range,
      insertText,
    })
  }

  return check
}

function formatWithConfig(editor: Editor, config: Config): Editor {
  /*
   * TODO: Implement format extension
   * Transform `text`, *text*, _text_, 1., -, etc. to slate blocks/leaves
   */

  const { insertText } = editor

  editor.insertText = (text) => {
    if (GlobalQueries.hasSelection(editor)) {
      return insertText(text)
    }

    let matches = 0

    for (const entry of config) {
      const { match } = processEntry({ text, editor, entry, insertText })
      if (match) matches += 1
    }

    if (!matches) {
      insertText(text)
    }
  }

  return editor
}

export function format(config: Config) {
  return (editor: Editor) => {
    return formatWithConfig(editor, config)
  }
}
