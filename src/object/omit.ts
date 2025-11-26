/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 * 
 * @param obj - The source object
 * @param keys - The property keys to omit
 * @returns Returns the new object
 * 
 * @example
 * omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])
 * // => { b: 2 }
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Expected an object')
  }
  
  const result = { ...obj } as any
  
  for (const key of keys) {
    delete result[key]
  }
  
  return result
}
