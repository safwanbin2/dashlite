/**
 * Creates a slice of array from start up to, but not including, end.
 *
 * @param array - The array to slice
 * @param start - The start position
 * @param end - The end position
 * @returns Returns the slice of array
 *
 * @example
 * slice([1, 2, 3], 0, 2)
 * // => [1, 2]
 */
export function slice<T>(array: T[], start: number = 0, end?: number): T[] {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  end = end === undefined ? length : end
  if (end < 0) {
    end += length
  }
  end = end > length ? length : end
  if (start < 0) {
    start += length
  }
  start = start > end ? 0 : start
  
  // Use native slice for performance
  return array.slice(start, end)
}

/**
 * Creates a slice of array with n elements taken from the beginning.
 *
 * @param array - The array to query
 * @param n - The number of elements to take
 * @returns Returns the slice of array
 *
 * @example
 * take([1, 2, 3])
 * // => [1]
 *
 * take([1, 2, 3], 2)
 * // => [1, 2]
 *
 * take([1, 2, 3], 5)
 * // => [1, 2, 3]
 */
export function take<T>(array: T[], n: number = 1): T[] {
  if (array == null || array.length === 0) {
    return []
  }
  return slice(array, 0, n < 0 ? 0 : n)
}

/**
 * Creates a slice of array with n elements taken from the end.
 *
 * @param array - The array to query
 * @param n - The number of elements to take
 * @returns Returns the slice of array
 *
 * @example
 * takeRight([1, 2, 3])
 * // => [3]
 *
 * takeRight([1, 2, 3], 2)
 * // => [2, 3]
 *
 * takeRight([1, 2, 3], 5)
 * // => [1, 2, 3]
 */
export function takeRight<T>(array: T[], n: number = 1): T[] {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  n = n > length ? length : n
  return slice(array, n < 0 ? 0 : length - n, length)
}

/**
 * Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey.
 *
 * @param array - The array to query
 * @param predicate - The function invoked per iteration
 * @returns Returns the slice of array
 *
 * @example
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * takeWhile(users, (o) => !o.active)
 * // => objects for ['barney', 'fred']
 */
export function takeWhile<T>(array: T[], predicate: (value: T) => boolean): T[] {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  let index = -1
  while (++index < length && predicate(array[index])) {}
  return slice(array, 0, index)
}

/**
 * Creates a slice of array with elements taken from the end. Elements are taken until predicate returns falsey.
 *
 * @param array - The array to query
 * @param predicate - The function invoked per iteration
 * @returns Returns the slice of array
 *
 * @example
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * takeRightWhile(users, (o) => !o.active)
 * // => objects for ['fred', 'pebbles']
 */
export function takeRightWhile<T>(array: T[], predicate: (value: T) => boolean): T[] {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  let index = length
  while (index-- && predicate(array[index])) {}
  return slice(array, index + 1, length)
}
