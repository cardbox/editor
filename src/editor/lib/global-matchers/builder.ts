import { ElementType } from '../../shared/types'
import { block } from './block'
import { childOf } from './child-of'
import { equals } from './equals'
import { notEquals } from './not-equals'
import { Editor, Element, Node } from 'slate'

export class Builder {
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

  equals(node: Node | Node[]) {
    this.stages.push(equals(this.editor, node))
    return this
  }

  childOf(element: Element) {
    this.stages.push(childOf(this.editor, element))
    return this
  }

  compile() {
    return (node: Node): boolean => {
      return this.stages.every((stage) => stage(node))
    }
  }
}

export const builder = (editor: Editor) => new Builder(editor)
