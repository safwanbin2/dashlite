import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { debounce, throttle, memoize } from '../src/function'

describe('Function Utilities', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('debounce', () => {
    it('should debounce function calls', () => {
      const func = vi.fn()
      const debounced = debounce(func, 100)

      debounced()
      debounced()
      debounced()

      expect(func).not.toHaveBeenCalled()

      vi.advanceTimersByTime(100)
      expect(func).toHaveBeenCalledTimes(1)
    })

    it('should support leading edge', () => {
      const func = vi.fn()
      const debounced = debounce(func, 100, { leading: true, trailing: false })

      debounced()
      expect(func).toHaveBeenCalledTimes(1)

      debounced()
      debounced()
      vi.advanceTimersByTime(100)
      expect(func).toHaveBeenCalledTimes(1)
    })

    it('should support cancel', () => {
      const func = vi.fn()
      const debounced = debounce(func, 100)

      debounced()
      debounced.cancel()

      vi.advanceTimersByTime(100)
      expect(func).not.toHaveBeenCalled()
    })

    it('should support flush', () => {
      const func = vi.fn()
      const debounced = debounce(func, 100)

      debounced()
      debounced.flush()

      expect(func).toHaveBeenCalledTimes(1)
    })

    it('should throw error for non-function input', () => {
      expect(() => debounce('not a function' as any, 100)).toThrow(TypeError)
    })
  })

  describe('throttle', () => {
    it('should throttle function calls', () => {
      const func = vi.fn()
      const throttled = throttle(func, 100)

      throttled()
      expect(func).toHaveBeenCalledTimes(1)

      throttled()
      throttled()
      expect(func).toHaveBeenCalledTimes(1)

      vi.advanceTimersByTime(100)
      expect(func).toHaveBeenCalledTimes(2)
    })

    it('should support leading: false', () => {
      const func = vi.fn()
      const throttled = throttle(func, 100, { leading: false })

      throttled()
      expect(func).not.toHaveBeenCalled()

      vi.advanceTimersByTime(100)
      expect(func).toHaveBeenCalledTimes(1)
    })

    it('should support cancel', () => {
      const func = vi.fn()
      const throttled = throttle(func, 100)

      throttled()
      throttled.cancel()

      vi.advanceTimersByTime(100)
      expect(func).toHaveBeenCalledTimes(1)
    })

    it('should throw error for non-function input', () => {
      expect(() => throttle('not a function' as any, 100)).toThrow(TypeError)
    })
  })

  describe('memoize', () => {
    it('should memoize function results', () => {
      const func = vi.fn((n: number) => n * 2)
      const memoized = memoize(func)

      expect(memoized(2)).toBe(4)
      expect(memoized(2)).toBe(4)
      expect(func).toHaveBeenCalledTimes(1)

      expect(memoized(3)).toBe(6)
      expect(func).toHaveBeenCalledTimes(2)
    })

    it('should support custom resolver', () => {
      const func = vi.fn((a: number, b: number) => a + b)
      const memoized = memoize(func, (a, b) => `${a}-${b}`)

      expect(memoized(1, 2)).toBe(3)
      expect(memoized(1, 2)).toBe(3)
      expect(func).toHaveBeenCalledTimes(1)
    })

    it('should expose cache', () => {
      const func = (n: number) => n * 2
      const memoized = memoize(func)

      memoized(2)
      expect(memoized.cache.has(2)).toBe(true)
      expect(memoized.cache.get(2)).toBe(4)
    })

    it('should throw error for non-function input', () => {
      expect(() => memoize('not a function' as any)).toThrow(TypeError)
    })
  })
})
