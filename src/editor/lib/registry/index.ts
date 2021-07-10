export function createRegistry<TKey extends unknown, TValue extends unknown>() {
  const map = new Map<TKey, TValue>()

  const set = (key: TKey, value: TValue) => {
    map.set(key, value)
  }

  const get = (key: TKey): TValue => {
    const value = map.get(key)

    if (!value)
      throw new Error(
        `The value with key "${key}" should be present in registry, but it's not`
      )

    return value
  }

  const maybeGet = (key: TKey) => {
    return map.get(key)
  }

  const getAll = () => {
    return Array.from(map.values())
  }

  return { set, get, maybeGet, getAll }
}
