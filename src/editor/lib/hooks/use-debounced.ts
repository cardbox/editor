import debounce from 'just-debounce'
import { useMemo } from 'react'

type AnyFunction = (...args: unknown[]) => unknown

export function useDebounced<T extends AnyFunction>(fn: T, ms: number): T {
  return useMemo(() => debounce(fn, ms) as T, [fn, ms])
}
