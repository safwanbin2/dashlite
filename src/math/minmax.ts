/**
 * Computes the maximum value of array. If array is empty or falsy, undefined is returned.
 *
 * @param array - The array to iterate over
 * @returns Returns the maximum value
 *
 * @example
 * max([4, 2, 8, 6])
 * // => 8
 *
 * max([])
 * // => undefined
 */
export function max<T extends number>(array: T[]): T | undefined {
  if (!array || array.length === 0) {
    return undefined;
  }

  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > result) {
      result = array[i];
    }
  }
  return result;
}

/**
 * This method is like max except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked.
 *
 * @param array - The array to iterate over
 * @param iteratee - The iteratee invoked per element
 * @returns Returns the maximum value
 *
 * @example
 * const objects = [{ 'n': 1 }, { 'n': 2 }]
 * maxBy(objects, (o) => o.n)
 * // => { 'n': 2 }
 *
 * maxBy([{ x: 4 }, { x: 2 }, { x: 8 }, { x: 6 }], (o) => o.x)
 * // => { x: 8 }
 */
export function maxBy<T>(
  array: T[],
  iteratee: (value: T) => number
): T | undefined {
  if (!array || array.length === 0) {
    return undefined;
  }

  let result = array[0];
  let maxValue = iteratee(result);

  for (let i = 1; i < array.length; i++) {
    const value = iteratee(array[i]);
    if (value > maxValue) {
      maxValue = value;
      result = array[i];
    }
  }
  return result;
}

/**
 * Computes the minimum value of array. If array is empty or falsy, undefined is returned.
 *
 * @param array - The array to iterate over
 * @returns Returns the minimum value
 *
 * @example
 * min([4, 2, 8, 6])
 * // => 2
 *
 * min([])
 * // => undefined
 */
export function min<T extends number>(array: T[]): T | undefined {
  if (!array || array.length === 0) {
    return undefined;
  }

  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < result) {
      result = array[i];
    }
  }
  return result;
}

/**
 * This method is like min except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked.
 *
 * @param array - The array to iterate over
 * @param iteratee - The iteratee invoked per element
 * @returns Returns the minimum value
 *
 * @example
 * const objects = [{ 'n': 1 }, { 'n': 2 }]
 * minBy(objects, (o) => o.n)
 * // => { 'n': 1 }
 *
 * minBy([{ x: 4 }, { x: 2 }, { x: 8 }, { x: 6 }], (o) => o.x)
 * // => { x: 2 }
 */
export function minBy<T>(
  array: T[],
  iteratee: (value: T) => number
): T | undefined {
  if (!array || array.length === 0) {
    return undefined;
  }

  let result = array[0];
  let minValue = iteratee(result);

  for (let i = 1; i < array.length; i++) {
    const value = iteratee(array[i]);
    if (value < minValue) {
      minValue = value;
      result = array[i];
    }
  }
  return result;
}
