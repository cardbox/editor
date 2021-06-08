import debounce from 'just-debounce-it'
import { useMemo } from 'react'

type AnyFunction = (...args: unknown[]) => unknown

export function useDebounced<T extends AnyFunction>(fn: T, ms: number) {
  return useMemo(() => debounce(fn, ms), [fn, ms])
}
