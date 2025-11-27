/**
 * Removes all given values from array using SameValueZero for equality comparisons.
 *
 * @param array - The array to modify
 * @param values - The values to remove
 * @returns Returns array
 *
 * @example
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 * pull(array, 'a', 'c')
 * console.log(array)
 * // => ['b', 'b']
 */
export function pull<T>(array: T[], ...values: T[]): T[] {
  if (array == null) {
    return [];
  }
  const valueSet = new Set(values);
  let index = -1;
  let resIndex = 0;
  const length = array.length;

  while (++index < length) {
    const value = array[index];
    if (!valueSet.has(value)) {
      array[resIndex++] = value;
    }
  }
  array.length = resIndex;
  return array;
}

/**
 * This method is like pull except that it accepts an array of values to remove.
 *
 * @param array - The array to modify
 * @param values - The values to remove
 * @returns Returns array
 *
 * @example
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 * pullAll(array, ['a', 'c'])
 * console.log(array)
 * // => ['b', 'b']
 */
export function pullAll<T>(array: T[], values: T[]): T[] {
  if (array == null || values == null) {
    return array || [];
  }
  return pull(array, ...values);
}

/**
 * This method is like pullAll except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared.
 *
 * @param array - The array to modify
 * @param values - The values to remove
 * @param iteratee - The iteratee invoked per element
 * @returns Returns array
 *
 * @example
 * const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]
 * pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], (o) => o.x)
 * console.log(array)
 * // => [{ 'x': 2 }]
 */
export function pullAllBy<T, U>(
  array: T[],
  values: T[],
  iteratee: (value: T) => U
): T[] {
  if (array == null || values == null) {
    return array || [];
  }

  const valueSet = new Set(values.map(iteratee));
  let index = -1;
  let resIndex = 0;
  const length = array.length;

  while (++index < length) {
    const value = array[index];
    if (!valueSet.has(iteratee(value))) {
      array[resIndex++] = value;
    }
  }
  array.length = resIndex;
  return array;
}

/**
 * This method is like pullAll except that it accepts comparator which is invoked to compare elements of array to values.
 *
 * @param array - The array to modify
 * @param values - The values to remove
 * @param comparator - The comparator invoked per element
 * @returns Returns array
 *
 * @example
 * const array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }]
 * pullAllWith(array, [{ 'x': 3, 'y': 4 }], (a, b) => a.x === b.x && a.y === b.y)
 * console.log(array)
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
 */
export function pullAllWith<T>(
  array: T[],
  values: T[],
  comparator: (a: T, b: T) => boolean
): T[] {
  if (array == null || values == null) {
    return array || [];
  }

  let index = -1;
  let resIndex = 0;
  const length = array.length;

  while (++index < length) {
    const value = array[index];
    let shouldPull = false;

    for (const val of values) {
      if (comparator(value, val)) {
        shouldPull = true;
        break;
      }
    }

    if (!shouldPull) {
      array[resIndex++] = value;
    }
  }
  array.length = resIndex;
  return array;
}

/**
 * Removes elements from array corresponding to indexes and returns an array of removed elements.
 *
 * @param array - The array to modify
 * @param indexes - The indexes of elements to remove
 * @returns Returns the new array of removed elements
 *
 * @example
 * const array = ['a', 'b', 'c', 'd']
 * const pulled = pullAt(array, [1, 3])
 * console.log(array)
 * // => ['a', 'c']
 * console.log(pulled)
 * // => ['b', 'd']
 */
export function pullAt<T>(array: T[], indexes: number[]): T[] {
  if (array == null) {
    return [];
  }

  const length = array.length;
  const result: T[] = [];

  // Normalize negative indexes and sort
  const normalizedIndexes = indexes
    .map((index) => (index < 0 ? length + index : index))
    .filter((index) => index >= 0 && index < length)
    .sort((a, b) => b - a); // Sort descending to remove from end first

  // Remove elements and collect them
  for (const index of normalizedIndexes) {
    result.unshift(array.splice(index, 1)[0]);
  }

  return result;
}

/**
 * Removes all elements from array that predicate returns truthy for and returns an array of the removed elements.
 *
 * @param array - The array to modify
 * @param predicate - The function invoked per iteration
 * @returns Returns the new array of removed elements
 *
 * @example
 * const array = [1, 2, 3, 4]
 * const evens = remove(array, (n) => n % 2 === 0)
 * console.log(array)
 * // => [1, 3]
 * console.log(evens)
 * // => [2, 4]
 */
export function remove<T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => boolean
): T[] {
  if (array == null) {
    return [];
  }

  const result: T[] = [];
  let index = -1;
  let resIndex = 0;
  const length = array.length;

  while (++index < length) {
    const value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
    } else {
      array[resIndex++] = value;
    }
  }
  array.length = resIndex;
  return result;
}
