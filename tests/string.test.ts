import { describe, it, expect } from 'vitest'
import { capitalize, camelCase, kebabCase, truncate } from '../src/string'

describe('String Utilities', () => {
  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello')
      expect(capitalize('HELLO')).toBe('Hello')
    })

    it('should handle empty strings', () => {
      expect(capitalize('')).toBe('')
    })

    it('should throw error for non-string input', () => {
      expect(() => capitalize(123 as any)).toThrow(TypeError)
    })
  })

  describe('camelCase', () => {
    it('should convert to camelCase', () => {
      expect(camelCase('Foo Bar')).toBe('fooBar')
      expect(camelCase('--foo-bar--')).toBe('fooBar')
      expect(camelCase('__FOO_BAR__')).toBe('fooBar')
    })

    it('should handle empty strings', () => {
      expect(camelCase('')).toBe('')
    })

    it('should throw error for non-string input', () => {
      expect(() => camelCase(123 as any)).toThrow(TypeError)
    })
  })

  describe('kebabCase', () => {
    it('should convert to kebab-case', () => {
      expect(kebabCase('Foo Bar')).toBe('foo-bar')
      expect(kebabCase('fooBar')).toBe('foo-bar')
      expect(kebabCase('__FOO_BAR__')).toBe('foo-bar')
    })

    it('should handle empty strings', () => {
      expect(kebabCase('')).toBe('')
    })

    it('should throw error for non-string input', () => {
      expect(() => kebabCase(123 as any)).toThrow(TypeError)
    })
  })

  describe('truncate', () => {
    it('should truncate long strings', () => {
      expect(truncate('hi-diddly-ho there, neighborino')).toBe('hi-diddly-ho there, neighbo...')
    })

    it('should respect custom length', () => {
      expect(truncate('hi-diddly-ho there, neighborino', { length: 24 })).toBe('hi-diddly-ho there, n...')
    })

    it('should use custom omission', () => {
      expect(truncate('hi-diddly-ho there, neighborino', { omission: ' [...]' })).toBe('hi-diddly-ho there, neig [...]')
    })

    it('should not truncate short strings', () => {
      expect(truncate('hello')).toBe('hello')
    })

    it('should throw error for non-string input', () => {
      expect(() => truncate(123 as any)).toThrow(TypeError)
    })
  })
})
