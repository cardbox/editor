import { Text } from 'slate'
import { createOrderedListElement } from './ordered-list'
import { ListElement } from './types'
import { createUnorderedListElement } from './unordered-list'

const mapTypeToCreate = {
  'ordered-list': createOrderedListElement,
  'unordered-list': createUnorderedListElement,
}

export const createListElement = <
  TType extends ListElement['type'],
  TElement extends ListElement = ReturnType<typeof mapTypeToCreate[TType]>
>(
  type: TType,
  children: Text[] = [{ text: '' }]
): TElement => {
  const fn = mapTypeToCreate[type]
  return fn(children) as TElement
}
