/**
 * Gets the first element of array.
 *
 * @param array - The array to query
 * @returns Returns the first element of array
 *
 * @example
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */
export function head<T>(array: T[]): T | undefined {
  return array && array.length ? array[0] : undefined
}

/**
 * Alias for head.
 */
export const first = head

/**
 * Gets the last element of array.
 *
 * @param array - The array to query
 * @returns Returns the last element of array
 *
 * @example
 * last([1, 2, 3])
 * // => 3
 */
export function last<T>(array: T[]): T | undefined {
  const length = array == null ? 0 : array.length
  return length ? array[length - 1] : undefined
}

/**
 * Gets the element at index n of array. If n is negative, the nth element from the end is returned.
 *
 * @param array - The array to query
 * @param n - The index of the element to return
 * @returns Returns the nth element of array
 *
 * @example
 * nth(['a', 'b', 'c', 'd'], 1)
 * // => 'b'
 *
 * nth(['a', 'b', 'c', 'd'], -2)
 * // => 'c'
 */
export function nth<T>(array: T[], n: number): T | undefined {
  const length = array == null ? 0 : array.length
  if (!length) {
    return undefined
  }
  n += n < 0 ? length : 0
  return (n >= 0 && n < length) ? array[n] : undefined
}

/**
 * Gets all but the first element of array.
 *
 * @param array - The array to query
 * @returns Returns the slice of array
 *
 * @example
 * tail([1, 2, 3])
 * // => [2, 3]
 */
export function tail<T>(array: T[]): T[] {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  const [, ...result] = array
  return result
}
