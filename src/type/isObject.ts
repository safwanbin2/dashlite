/**
 * Checks if value is a plain object (created by Object constructor or has null prototype).
 * 
 * @param value - The value to check
 * @returns Returns true if value is a plain object, else false
 * 
 * @example
 * isObject({})
 * // => true
 * 
 * isObject([1, 2, 3])
 * // => false
 * 
 * isObject(null)
 * // => false
 */
export function isObject(value: unknown): value is Record<string, any> {
  if (typeof value !== 'object' || value === null) {
    return false
  }
  
  const proto = Object.getPrototypeOf(value)
  return proto === Object.prototype || proto === null
}
