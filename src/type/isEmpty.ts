/**
 * Checks if value is empty. A value is considered empty if it's:
 * - null or undefined
 * - An empty string, array, or object
 * - A Map or Set with size 0
 * 
 * @param value - The value to check
 * @returns Returns true if value is empty, else false
 * 
 * @example
 * isEmpty(null)
 * // => true
 * 
 * isEmpty('')
 * // => true
 * 
 * isEmpty([])
 * // => true
 * 
 * isEmpty({})
 * // => true
 * 
 * isEmpty([1, 2, 3])
 * // => false
 */
export function isEmpty(value: unknown): boolean {
  if (value == null) {
    return true
  }
  
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0
  }
  
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0
  }
  
  if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }
  
  return false
}
