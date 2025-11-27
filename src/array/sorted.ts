/**
 * Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order.
 *
 * @param array - The sorted array to inspect
 * @param value - The value to evaluate
 * @returns Returns the index at which value should be inserted into array
 *
 * @example
 * sortedIndex([30, 50], 40)
 * // => 1
 */
export function sortedIndex<T>(array: T[], value: T): number {
  if (array == null) {
    return 0;
  }

  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = (low + high) >>> 1;
    if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

/**
 * This method is like sortedIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking.
 *
 * @param array - The sorted array to inspect
 * @param value - The value to evaluate
 * @param iteratee - The iteratee invoked per element
 * @returns Returns the index at which value should be inserted into array
 *
 * @example
 * const objects = [{ 'x': 4 }, { 'x': 5 }]
 * sortedIndexBy(objects, { 'x': 4 }, (o) => o.x)
 * // => 0
 */
export function sortedIndexBy<T, U>(
  array: T[],
  value: T,
  iteratee: (value: T) => U
): number {
  if (array == null) {
    return 0;
  }

  const computed = iteratee(value);
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = (low + high) >>> 1;
    if (iteratee(array[mid]) < computed) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

/**
 * This method is like indexOf except that it performs a binary search on a sorted array.
 *
 * @param array - The sorted array to inspect
 * @param value - The value to search for
 * @returns Returns the index of the matched value, else -1
 *
 * @example
 * sortedIndexOf([4, 5, 5, 5, 6], 5)
 * // => 1
 */
export function sortedIndexOf<T>(array: T[], value: T): number {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }

  const index = sortedIndex(array, value);
  return index < length && array[index] === value ? index : -1;
}

/**
 * This method is like sortedIndex except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.
 *
 * @param array - The sorted array to inspect
 * @param value - The value to evaluate
 * @returns Returns the index at which value should be inserted into array
 *
 * @example
 * sortedLastIndex([4, 5, 5, 5, 6], 5)
 * // => 4
 */
export function sortedLastIndex<T>(array: T[], value: T): number {
  if (array == null) {
    return 0;
  }

  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = (low + high) >>> 1;
    if (value < array[mid]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

/**
 * This method is like sortedLastIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking.
 *
 * @param array - The sorted array to inspect
 * @param value - The value to evaluate
 * @param iteratee - The iteratee invoked per element
 * @returns Returns the index at which value should be inserted into array
 *
 * @example
 * const objects = [{ 'x': 4 }, { 'x': 5 }]
 * sortedLastIndexBy(objects, { 'x': 4 }, (o) => o.x)
 * // => 1
 */
export function sortedLastIndexBy<T, U>(
  array: T[],
  value: T,
  iteratee: (value: T) => U
): number {
  if (array == null) {
    return 0;
  }

  const computed = iteratee(value);
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = (low + high) >>> 1;
    if (computed < iteratee(array[mid])) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

/**
 * This method is like lastIndexOf except that it performs a binary search on a sorted array.
 *
 * @param array - The sorted array to inspect
 * @param value - The value to search for
 * @returns Returns the index of the matched value, else -1
 *
 * @example
 * sortedLastIndexOf([4, 5, 5, 5, 6], 5)
 * // => 3
 */
export function sortedLastIndexOf<T>(array: T[], value: T): number {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }

  const index = sortedLastIndex(array, value);
  return index > 0 && array[index - 1] === value ? index - 1 : -1;
}

/**
 * This method is like uniq except that it's designed and optimized for sorted arrays.
 *
 * @param array - The sorted array to inspect
 * @returns Returns the new duplicate free array
 *
 * @example
 * sortedUniq([1, 1, 2])
 * // => [1, 2]
 */
export function sortedUniq<T>(array: T[]): T[] {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }

  const result: T[] = [array[0]];
  let seen = array[0];

  for (let i = 1; i < length; i++) {
    const value = array[i];
    if (value !== seen) {
      seen = value;
      result.push(value);
    }
  }
  return result;
}

/**
 * This method is like uniqBy except that it's designed and optimized for sorted arrays.
 *
 * @param array - The sorted array to inspect
 * @param iteratee - The iteratee invoked per element
 * @returns Returns the new duplicate free array
 *
 * @example
 * sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)
 * // => [1.1, 2.3]
 */
export function sortedUniqBy<T, U>(array: T[], iteratee: (value: T) => U): U[] {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }

  const result: U[] = [];
  let seen: U | undefined = undefined;

  for (let i = 0; i < length; i++) {
    const value = iteratee(array[i]);
    if (value !== seen) {
      seen = value;
      result.push(value);
    }
  }
  return result;
}
