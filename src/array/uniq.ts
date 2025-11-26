/**
 * Creates a duplicate-free version of an array.
 * 
 * @param array - The array to inspect
 * @returns Returns the new duplicate free array
 * 
 * @example
 * uniq([2, 1, 2])
 * // => [2, 1]
 */
export function uniq<T>(array: T[]): T[] {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array')
  }
  
  return Array.from(new Set(array))
}

/**
 * Creates a duplicate-free version of an array using a comparator function.
 * 
 * @param array - The array to inspect
 * @param iteratee - The iteratee invoked per element
 * @returns Returns the new duplicate free array
 * 
 * @example
 * uniqBy([2.1, 1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 * 
 * uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], (o) => o.x)
 * // => [{ x: 1 }, { x: 2 }]
 */
export function uniqBy<T, U>(array: T[], iteratee: (value: T) => U): T[] {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array')
  }
  
  const seen = new Set<U>()
  const result: T[] = []
  
  for (const item of array) {
    const key = iteratee(item)
    if (!seen.has(key)) {
      seen.add(key)
      result.push(item)
    }
  }
  
  return result
}
