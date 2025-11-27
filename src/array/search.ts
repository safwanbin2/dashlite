/**
 * Gets the index at which the first occurrence of value is found in array.
 *
 * @param array - The array to inspect
 * @param value - The value to search for
 * @param fromIndex - The index to search from
 * @returns Returns the index of the matched value, else -1
 *
 * @example
 * indexOf([1, 2, 1, 2], 2)
 * // => 1
 *
 * indexOf([1, 2, 1, 2], 2, 2)
 * // => 3
 */
export function indexOf<T>(array: T[], value: T, fromIndex: number = 0): number {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  let index = fromIndex
  if (index < 0) {
    index = Math.max(length + index, 0)
  }
  for (let i = index; i < length; i++) {
    if (array[i] === value) {
      return i
    }
  }
  return -1
}

/**
 * This method is like indexOf except that it iterates over elements of array from right to left.
 *
 * @param array - The array to inspect
 * @param value - The value to search for
 * @param fromIndex - The index to search from
 * @returns Returns the index of the matched value, else -1
 *
 * @example
 * lastIndexOf([1, 2, 1, 2], 2)
 * // => 3
 *
 * lastIndexOf([1, 2, 1, 2], 2, 2)
 * // => 1
 */
export function lastIndexOf<T>(array: T[], value: T, fromIndex?: number): number {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  let index = length - 1
  if (fromIndex !== undefined) {
    index = fromIndex
    index = index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1)
  }
  for (let i = index; i >= 0; i--) {
    if (array[i] === value) {
      return i
    }
  }
  return -1
}

/**
 * This method is like find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
 *
 * @param array - The array to inspect
 * @param predicate - The function invoked per iteration
 * @param fromIndex - The index to search from
 * @returns Returns the index of the found element, else -1
 *
 * @example
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * findIndex(users, (o) => o.user == 'barney')
 * // => 0
 */
export function findIndex<T>(array: T[], predicate: (value: T) => boolean, fromIndex: number = 0): number {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  let index = fromIndex
  if (index < 0) {
    index = Math.max(length + index, 0)
  }
  for (let i = index; i < length; i++) {
    if (predicate(array[i])) {
      return i
    }
  }
  return -1
}

/**
 * This method is like findIndex except that it iterates over elements of collection from right to left.
 *
 * @param array - The array to inspect
 * @param predicate - The function invoked per iteration
 * @param fromIndex - The index to search from
 * @returns Returns the index of the found element, else -1
 *
 * @example
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * findLastIndex(users, (o) => o.user == 'pebbles')
 * // => 2
 */
export function findLastIndex<T>(array: T[], predicate: (value: T) => boolean, fromIndex?: number): number {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  let index = length - 1
  if (fromIndex !== undefined) {
    index = fromIndex
    index = index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1)
  }
  for (let i = index; i >= 0; i--) {
    if (predicate(array[i])) {
      return i
    }
  }
  return -1
}
