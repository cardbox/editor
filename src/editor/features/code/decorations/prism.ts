import { CodeElement } from '../../../elements/types'
import { Decorator } from '../../../lib/decoration-controller'
import { GlobalMatchers } from '../../../lib/global-matchers'
import { GlobalQueries } from '../../../lib/global-queries'
import Prism from 'prismjs'
import { Editor, Node, NodeEntry, Range } from 'slate'

export const prism: Decorator = (editor: Editor, entry: NodeEntry<Node>) => {
  const [node, path] = entry

  const isCodeLine = GlobalMatchers.block(editor, 'code-line')
  if (!isCodeLine(node)) return []

  /*
   * We need the 'code' node to get the highlight language
   */
  const codeEntry = GlobalQueries.getAbove<CodeElement>(editor, {
    at: path,
    type: 'block',
    match: GlobalMatchers.block(editor, 'code'),
  })
  if (!codeEntry) return []
  const [codeNode] = codeEntry

  const ranges: Range[] = []
  const text = Node.string(node)

  const tokens = Prism.tokenize(text, Prism.languages[codeNode.language])

  let offset = 0
  for (const token of tokens) {
    if (typeof token === 'string') {
      /*
       * The token is just a string, without any special highlight
       * So, we can just render as a simple string
       */

      offset += token.length
      continue
    }

    /*
     * The token is a Prism.Token
     * We need its 'type' and 'length' props
     * With 'length' we can "select" the right portion of code line string
     * And with 'type' we can tell the 'renderLeaf' what className should be used
     */

    ranges.push({
      anchor: { path, offset },
      focus: { path, offset: offset + token.length },
      prismToken: token.type,
    })

    offset += token.length
  }

  return ranges
}
