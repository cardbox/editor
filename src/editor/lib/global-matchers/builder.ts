import { Editor, Node } from 'slate'
import { ElementType } from '../../types'
import { block } from './block'
import { notEquals } from './not-equals'

class Builder {
  editor: Editor

  constructor(editor: Editor) {
    this.editor = editor
  }

  stages: Array<(node: Node) => boolean> = []

  block(type?: ElementType | ElementType[]) {
    this.stages.push(block(this.editor, type))
    return this
  }

  notEquals(node: Node) {
    this.stages.push(notEquals(this.editor, node))
    return this
  }

  compile() {
    return (node: Node): boolean => {
      return this.stages.every((stage) => stage(node))
    }
  }
}

export const builder = (editor: Editor) => new Builder(editor)
