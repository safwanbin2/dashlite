import { describe, it, expect } from 'vitest'
import { chunk, compact, flatten, flattenDeep, uniq, uniqBy } from '../src/array'

describe('Array Utilities', () => {
  describe('chunk', () => {
    it('should split array into chunks of specified size', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
      expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]])
    })

    it('should return empty array for size less than 1', () => {
      expect(chunk([1, 2, 3], 0)).toEqual([])
      expect(chunk([1, 2, 3], -1)).toEqual([])
    })

    it('should throw error for non-array input', () => {
      expect(() => chunk('not an array' as any, 2)).toThrow(TypeError)
    })
  })

  describe('compact', () => {
    it('should remove all falsy values', () => {
      expect(compact([0, 1, false, 2, '', 3, null, undefined, NaN])).toEqual([1, 2, 3])
    })

    it('should return empty array for all falsy values', () => {
      expect(compact([null, undefined, false, 0, ''])).toEqual([])
    })

    it('should throw error for non-array input', () => {
      expect(() => compact('not an array' as any)).toThrow(TypeError)
    })
  })

  describe('flatten', () => {
    it('should flatten array one level deep', () => {
      expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5])
    })

    it('should handle already flat arrays', () => {
      expect(flatten([1, 2, 3])).toEqual([1, 2, 3])
    })

    it('should throw error for non-array input', () => {
      expect(() => flatten('not an array' as any)).toThrow(TypeError)
    })
  })

  describe('flattenDeep', () => {
    it('should recursively flatten array', () => {
      expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5])
    })

    it('should handle already flat arrays', () => {
      expect(flattenDeep([1, 2, 3])).toEqual([1, 2, 3])
    })

    it('should throw error for non-array input', () => {
      expect(() => flattenDeep('not an array' as any)).toThrow(TypeError)
    })
  })

  describe('uniq', () => {
    it('should create duplicate-free array', () => {
      expect(uniq([2, 1, 2])).toEqual([2, 1])
      expect(uniq([1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3])
    })

    it('should handle empty arrays', () => {
      expect(uniq([])).toEqual([])
    })

    it('should throw error for non-array input', () => {
      expect(() => uniq('not an array' as any)).toThrow(TypeError)
    })
  })

  describe('uniqBy', () => {
    it('should create duplicate-free array using iteratee', () => {
      expect(uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2])
    })

    it('should work with object properties', () => {
      const result = uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], (o) => o.x)
      expect(result).toEqual([{ x: 1 }, { x: 2 }])
    })

    it('should throw error for non-array input', () => {
      expect(() => uniqBy('not an array' as any, (x) => x)).toThrow(TypeError)
    })
  })
})
