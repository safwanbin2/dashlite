/**
 * Fills elements of array with value from start up to, but not including, end.
 *
 * @param array - The array to fill
 * @param value - The value to fill array with
 * @param start - The start position
 * @param end - The end position
 * @returns Returns array
 *
 * @example
 * var array = [1, 2, 3]
 * fill(array, 'a')
 * // => ['a', 'a', 'a']
 *
 * fill(Array(3), 2)
 * // => [2, 2, 2]
 *
 * fill([4, 6, 8, 10], '*', 1, 3)
 * // => [4, '*', '*', 10]
 */
export function fill<T>(
  array: any[],
  value: T,
  start: number = 0,
  end?: number
): any[] {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  end = end === undefined || end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  end = end > length ? length : end;
  if (start < 0) {
    start += length;
  }
  start = start > end ? 0 : start;

  while (start < end) {
    array[start++] = value;
  }
  return array;
}

/**
 * Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.
 *
 * @param array - The array to modify
 * @returns Returns array
 *
 * @example
 * var array = [1, 2, 3]
 * reverse(array)
 * // => [3, 2, 1]
 */
export function reverse<T>(array: T[]): T[] {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  return array.reverse();
}

/**
 * Converts all elements in array into a string separated by separator.
 *
 * @param array - The array to convert
 * @param separator - The element separator
 * @returns Returns the joined string
 *
 * @example
 * join(['a', 'b', 'c'], '~')
 * // => 'a~b~c'
 */
export function join(array: any[], separator: string = ","): string {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return "";
  }
  return array.join(separator);
}

/**
 * The inverse of toPairs; this method returns an object composed from key-value pairs.
 *
 * @param pairs - The key-value pairs
 * @returns Returns the new object
 *
 * @example
 * fromPairs([['a', 1], ['b', 2]])
 * // => { 'a': 1, 'b': 2 }
 */
export function fromPairs<T>(
  pairs: [string | number | symbol, T][]
): Record<string | number | symbol, T> {
  const result: Record<string | number | symbol, T> = {};
  if (pairs == null) {
    return result;
  }
  for (const pair of pairs) {
    result[pair[0]] = pair[1];
  }
  return result;
}

/**
 * Recursively flatten array up to depth times.
 *
 * @param array - The array to flatten
 * @param depth - The maximum recursion depth
 * @returns Returns the new flattened array
 *
 * @example
 * var array = [1, [2, [3, [4]], 5]]
 * flattenDepth(array, 1)
 * // => [1, 2, [3, [4]], 5]
 *
 * flattenDepth(array, 2)
 * // => [1, 2, 3, [4], 5]
 */
export function flattenDepth(array: any[], depth: number = 1): any[] {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  return array.flat(depth);
}
