/**
 * Computes the sum of the values in array.
 *
 * @param array - The array to iterate over
 * @returns Returns the sum
 *
 * @example
 * sum([4, 2, 8, 6])
 * // => 20
 *
 * sum([])
 * // => 0
 */
export function sum(array: number[]): number {
  if (!array || array.length === 0) {
    return 0;
  }

  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

/**
 * This method is like sum except that it accepts iteratee which is invoked for each element in array to generate the value to be summed.
 *
 * @param array - The array to iterate over
 * @param iteratee - The iteratee invoked per element
 * @returns Returns the sum
 *
 * @example
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * sumBy(objects, (o) => o.n)
 * // => 20
 */
export function sumBy<T>(array: T[], iteratee: (value: T) => number): number {
  if (!array || array.length === 0) {
    return 0;
  }

  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += iteratee(array[i]);
  }
  return result;
}

/**
 * Computes the mean of the values in array.
 *
 * @param array - The array to iterate over
 * @returns Returns the mean
 *
 * @example
 * mean([4, 2, 8, 6])
 * // => 5
 *
 * mean([])
 * // => NaN
 */
export function mean(array: number[]): number {
  if (!array || array.length === 0) {
    return NaN;
  }

  return sum(array) / array.length;
}

/**
 * This method is like mean except that it accepts iteratee which is invoked for each element in array to generate the value to be averaged.
 *
 * @param array - The array to iterate over
 * @param iteratee - The iteratee invoked per element
 * @returns Returns the mean
 *
 * @example
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * meanBy(objects, (o) => o.n)
 * // => 5
 */
export function meanBy<T>(array: T[], iteratee: (value: T) => number): number {
  if (!array || array.length === 0) {
    return NaN;
  }

  return sumBy(array, iteratee) / array.length;
}
