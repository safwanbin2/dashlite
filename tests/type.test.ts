import { describe, it, expect } from 'vitest'
import { isArray, isObject, isEmpty } from '../src/type'

describe('Type Utilities', () => {
  describe('isArray', () => {
    it('should return true for arrays', () => {
      expect(isArray([])).toBe(true)
      expect(isArray([1, 2, 3])).toBe(true)
    })

    it('should return false for non-arrays', () => {
      expect(isArray('abc')).toBe(false)
      expect(isArray({})).toBe(false)
      expect(isArray(null)).toBe(false)
      expect(isArray(undefined)).toBe(false)
    })
  })

  describe('isObject', () => {
    it('should return true for plain objects', () => {
      expect(isObject({})).toBe(true)
      expect(isObject({ a: 1 })).toBe(true)
      expect(isObject(Object.create(null))).toBe(true)
    })

    it('should return false for non-plain objects', () => {
      expect(isObject([])).toBe(false)
      expect(isObject(null)).toBe(false)
      expect(isObject(new Date())).toBe(false)
      expect(isObject(/regex/)).toBe(false)
      expect(isObject('string')).toBe(false)
    })
  })

  describe('isEmpty', () => {
    it('should return true for empty values', () => {
      expect(isEmpty(null)).toBe(true)
      expect(isEmpty(undefined)).toBe(true)
      expect(isEmpty('')).toBe(true)
      expect(isEmpty([])).toBe(true)
      expect(isEmpty({})).toBe(true)
      expect(isEmpty(new Map())).toBe(true)
      expect(isEmpty(new Set())).toBe(true)
    })

    it('should return false for non-empty values', () => {
      expect(isEmpty('hello')).toBe(false)
      expect(isEmpty([1, 2, 3])).toBe(false)
      expect(isEmpty({ a: 1 })).toBe(false)
      expect(isEmpty(new Map([['a', 1]]))).toBe(false)
      expect(isEmpty(new Set([1, 2, 3]))).toBe(false)
      expect(isEmpty(42)).toBe(false)
      expect(isEmpty(true)).toBe(false)
    })
  })
})
