import { describe, it, expect } from 'vitest'
import { pick, omit, merge, clone } from '../src/object'

describe('Object Utilities', () => {
  describe('pick', () => {
    it('should pick specified properties', () => {
      expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 })
    })

    it('should ignore non-existent keys', () => {
      expect(pick({ a: 1, b: 2 }, ['a', 'c' as any])).toEqual({ a: 1 })
    })

    it('should throw error for non-object input', () => {
      expect(() => pick('not an object' as any, ['a'])).toThrow(TypeError)
    })
  })

  describe('omit', () => {
    it('should omit specified properties', () => {
      expect(omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ b: 2 })
    })

    it('should handle non-existent keys', () => {
      expect(omit({ a: 1, b: 2 }, ['c' as any])).toEqual({ a: 1, b: 2 })
    })

    it('should throw error for non-object input', () => {
      expect(() => omit('not an object' as any, ['a'])).toThrow(TypeError)
    })
  })

  describe('merge', () => {
    it('should merge objects', () => {
      expect(merge({ a: 1 }, { b: 2 }, { c: 3 })).toEqual({ a: 1, b: 2, c: 3 })
    })

    it('should deep merge nested objects', () => {
      const result = merge({ a: { b: 1 } }, { a: { c: 2 } })
      expect(result).toEqual({ a: { b: 1, c: 2 } })
    })

    it('should overwrite non-object values', () => {
      expect(merge({ a: 1 }, { a: 2 })).toEqual({ a: 2 })
    })

    it('should throw error for non-object input', () => {
      expect(() => merge('not an object' as any, {})).toThrow(TypeError)
    })
  })

  describe('clone', () => {
    it('should deep clone objects', () => {
      const obj = { a: 1, b: { c: 2 } }
      const cloned = clone(obj)
      cloned.b.c = 3
      expect(obj.b.c).toBe(2)
      expect(cloned.b.c).toBe(3)
    })

    it('should clone arrays', () => {
      const arr = [1, [2, 3]]
      const cloned = clone(arr)
      cloned[1][0] = 4
      expect(arr[1][0]).toBe(2)
      expect(cloned[1][0]).toBe(4)
    })

    it('should clone Date objects', () => {
      const date = new Date('2024-01-01')
      const cloned = clone(date)
      expect(cloned).toEqual(date)
      expect(cloned).not.toBe(date)
    })

    it('should clone RegExp objects', () => {
      const regex = /test/gi
      const cloned = clone(regex)
      expect(cloned.source).toBe(regex.source)
      expect(cloned.flags).toBe(regex.flags)
      expect(cloned).not.toBe(regex)
    })

    it('should clone Map objects', () => {
      const map = new Map([['a', 1], ['b', 2]])
      const cloned = clone(map)
      expect(cloned).toEqual(map)
      expect(cloned).not.toBe(map)
    })

    it('should clone Set objects', () => {
      const set = new Set([1, 2, 3])
      const cloned = clone(set)
      expect(cloned).toEqual(set)
      expect(cloned).not.toBe(set)
    })

    it('should handle primitive values', () => {
      expect(clone(42)).toBe(42)
      expect(clone('hello')).toBe('hello')
      expect(clone(null)).toBe(null)
      expect(clone(undefined)).toBe(undefined)
    })
  })
})
