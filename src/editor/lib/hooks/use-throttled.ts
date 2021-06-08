import { useMemo } from 'react'
import throttle from 'throttleit'

type AnyFunction = (...args: unknown[]) => unknown

export function useThrottled<T extends AnyFunction>(fn: T, ms: number) {
  return useMemo(() => throttle(fn, ms), [fn, ms])
}
