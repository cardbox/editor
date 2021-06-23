import { createListItemElement } from './list-item'
import { createOrderedListElement } from './ordered-list'
import { ListElement, ListItemElement } from './types'
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
  children: ListItemElement[] = [createListItemElement()]
): TElement => {
  const fn = mapTypeToCreate[type]
  return fn(children) as TElement
}
