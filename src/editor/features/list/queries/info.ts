import { GlobalMatchers } from '../../../lib/global-matchers'
import { GlobalQueries } from '../../../lib/global-queries'
import { ParagraphElement } from '../../paragraph'
import { ListElement, ListItemElement } from '../elements/types'
import { Editor, Element, Location, NodeEntry, Path } from 'slate'

interface Options {
  at?: Location
}

interface Info<
  TElement extends Element = Element,
  TMeta extends unknown = unknown
> {
  node: TElement
  path: Path
  meta: TMeta
}

type NoMeta<TInfo extends Info = Info> = Omit<TInfo, 'meta'>

interface ListMeta {
  isNested: boolean
}

interface ItemMeta {
  // contains only paragraph and list optionally
  isSimple: boolean

  // position in list
  index: number
  isFirst: boolean
  isLast: boolean

  // has nothing inside
  isEmpty: boolean
}

interface BlockMeta {
  isList: boolean

  // position in item
  isFirst: boolean
  isLast: boolean

  // selection position
  isOnStart: boolean
  isOnEnd: boolean

  // has no text inside
  isEmpty: boolean
}

type ListInfo = Info<ListElement, ListMeta>
type ItemInfo = Info<ListItemElement, ItemMeta>
type BlockInfo = Info<Element, BlockMeta>

interface ItemBlocks {
  first: BlockInfo | null
  second: BlockInfo | null
  third: BlockInfo | null
}

function isList(editor: Editor) {
  return GlobalMatchers.block(editor, ['ordered-list', 'unordered-list'])
}

function createBlockMeta(editor: Editor, item: NoMeta<ItemInfo>) {
  return ([node, path]: [Element, Path]) => {
    const [isOnStart, isOnEnd] = GlobalQueries.isOnEdges(editor, {
      of: path,
    })

    const isEmpty = Editor.isEmpty(editor, node)

    const children = item.node.children

    return {
      isFirst: children[0] === node,
      isLast: children[children.length - 1] === node,
      isOnStart,
      isOnEnd,
      isEmpty,
      isList: isList(editor)(node),
    }
  }
}

function createItemBlocks(editor: Editor, item: NoMeta<ItemInfo>): ItemBlocks {
  const entry: NodeEntry<Element> = [item.node, item.path]

  const first = createInfo({
    entry: childAt<ParagraphElement>(entry, 0),
    createMeta: createBlockMeta(editor, item),
  })

  const second = createInfo({
    entry: childAt(entry, 1),
    createMeta: createBlockMeta(editor, item),
  })

  const third = createInfo({
    entry: childAt(entry, 2),
    createMeta: createBlockMeta(editor, item),
  })

  return {
    first,
    second,
    third,
  }
}

function isParagraph(editor: Editor) {
  return GlobalMatchers.block(editor, 'paragraph')
}

function createItemMeta(
  editor: Editor,
  list: NoMeta<ListInfo>,
  blocks: ItemBlocks
) {
  const { first, second, third } = blocks

  const isSimple = (): boolean => {
    if (!first) return false
    if (first.node.type !== 'paragraph') return false
    if (!second) return true
    if (!isList(editor)(second.node)) return false
    if (third) return false
    return true
  }

  return ([node]: [Element, Path]) => {
    const index = list.node.children.findIndex((item) => item === node)

    return {
      isSimple: isSimple(),
      index,
      isFirst: index === 0,
      isLast: index === list.node.children.length - 1,
      isEmpty:
        node.children.length === 1 &&
        isParagraph(editor)(node.children[0]) &&
        Editor.isEmpty(editor, node.children[0]),
      hasList: isList(editor)(node.children[1]),
    }
  }
}

function createItemAndBlocksInfo({
  editor,
  entry,
  list,
}: {
  editor: Editor
  entry: NodeEntry<ListItemElement> | undefined
  list: NoMeta<ListInfo>
}) {
  if (!entry) {
    return { item: null, blocks: null }
  }

  const noMeta = createNoMeta(entry)
  const blocks = createItemBlocks(editor, noMeta)

  const item = createInfo({
    entry,
    createMeta: createItemMeta(editor, list, blocks),
  })

  if (!item) {
    return { item: null, blocks: null }
  }

  return {
    item,
    blocks,
  }
}

export function info(editor: Editor, options: Options = {}) {
  const { at = editor.selection } = options
  if (!at) return

  const listEntry = GlobalQueries.getAbove<ListElement>(editor, {
    at,
    type: 'block',
    mode: 'lowest',
    match: isList(editor),
  })

  if (!listEntry) return

  const listAboveEntry = GlobalQueries.getAbove(editor, {
    at,
    type: 'block',
    mode: 'lowest',
    match: GlobalMatchers.builder(editor)
      .block(['ordered-list', 'unordered-list'])
      .notEquals(listEntry[0])
      .compile(),
  })

  const list = createInfo({
    entry: listEntry,
    createMeta() {
      return {
        isNested: Boolean(listAboveEntry),
      }
    },
  })

  if (!list) return

  const listAbove = createInfo({
    entry: listAboveEntry,
    createMeta() {
      return {}
    },
  })

  const { item, blocks } = createItemAndBlocksInfo({
    editor,
    entry: GlobalQueries.getAbove<ListItemElement>(editor, {
      at,
      type: 'block',
      mode: 'lowest',
      match: GlobalMatchers.block(editor, 'list-item'),
    }),
    list,
  })

  if (!item) return
  if (!blocks) return

  const itemAbove = createInfo({
    entry: GlobalQueries.getAbove<ListItemElement>(editor, {
      at,
      type: 'block',
      mode: 'lowest',
      match: GlobalMatchers.builder(editor)
        .block('list-item')
        .notEquals(item.node)
        .compile(),
    }),
    createMeta: () => ({}),
  })

  const currentBlock = createInfo({
    entry: GlobalQueries.getAbove(editor, {
      at,
      type: 'block',
      mode: 'highest',
      match: GlobalMatchers.childOf(editor, item.node),
    }),
    createMeta: createBlockMeta(editor, item),
  })

  if (!currentBlock) return

  const matchSameListItem = GlobalMatchers.builder(editor)
    .block('list-item')
    .childOf(list.node)
    .compile()

  const { item: previousItem } = createItemAndBlocksInfo({
    editor,
    entry: Editor.previous<ListItemElement>(editor, {
      at: item.path,
      match: matchSameListItem,
    }),
    list,
  })

  const { item: nextItem } = createItemAndBlocksInfo({
    editor,
    entry: Editor.next<ListItemElement>(editor, {
      at: item.path,
      match: matchSameListItem,
    }),
    list,
  })

  const matchSameItemBlock = GlobalMatchers.builder(editor)
    .block()
    .childOf(item.node)
    .compile()

  const previousBlock = createInfo({
    entry: Editor.previous<Element>(editor, {
      at: currentBlock.path,
      match: matchSameItemBlock,
    }),
    createMeta: createBlockMeta(editor, item),
  })

  const nextBlock = createInfo({
    entry: Editor.next<Element>(editor, {
      at: currentBlock.path,
      match: matchSameItemBlock,
    }),
    createMeta: createBlockMeta(editor, item),
  })

  return {
    lists: {
      current: list,
      above: listAbove,
    },
    items: {
      current: item,
      previous: previousItem,
      next: nextItem,
      above: itemAbove,
    },
    blocks: {
      ...blocks,
      current: currentBlock,
      previous: previousBlock,
      next: nextBlock,
    },
  }
}

export type FullInfo = Exclude<ReturnType<typeof info>, undefined>

function childAt<TElement extends Element>(
  [node, path]: NodeEntry<Element>,
  index: number
): NodeEntry<TElement> | undefined {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!node.children[index]) return
  return [node.children[index] as TElement, path.concat(index)]
}

function createNoMeta<TElement extends Element>(
  entry: NodeEntry<TElement>
): NoMeta<Info<TElement>> {
  const [node, path] = entry
  return { node, path }
}

type CreateMeta<
  TElement extends Element,
  TMeta extends Record<string, unknown>
> = (params: [TElement, Path]) => TMeta

function createInfo<
  TElement extends Element,
  TMeta extends Record<string, unknown>
>({
  entry,
  createMeta = () => ({} as TMeta),
}: {
  entry: NodeEntry<TElement> | undefined
  createMeta: CreateMeta<TElement, TMeta>
}) {
  if (!entry) return null
  const [node, path] = entry
  const meta = createMeta([node, path])
  return { node, path, meta }
}
