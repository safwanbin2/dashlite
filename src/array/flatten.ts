/**
 * Flattens array a single level deep.
 * 
 * @param array - The array to flatten
 * @returns Returns the new flattened array
 * 
 * @example
 * flatten([1, [2, [3, [4]], 5]])
 * // => [1, 2, [3, [4]], 5]
 */
export function flatten<T>(array: T[]): T extends (infer U)[] ? U[] : T[] {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array')
  }
  
  return array.flat(1) as any
}

/**
 * Recursively flattens array.
 * 
 * @param array - The array to flatten
 * @returns Returns the new flattened array
 * 
 * @example
 * flattenDeep([1, [2, [3, [4]], 5]])
 * // => [1, 2, 3, 4, 5]
 */
export function flattenDeep<T>(array: T[]): any[] {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array')
  }
  
  return array.flat(Infinity)
}
