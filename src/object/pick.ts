/**
 * Creates an object composed of the picked object properties.
 * 
 * @param obj - The source object
 * @param keys - The property keys to pick
 * @returns Returns the new object
 * 
 * @example
 * pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])
 * // => { a: 1, c: 3 }
 */
export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Expected an object')
  }
  
  const result = {} as Pick<T, K>
  
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  
  return result
}
