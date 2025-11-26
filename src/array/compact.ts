/**
 * Creates an array with all falsy values removed.
 * The values false, null, 0, "", undefined, and NaN are falsy.
 * 
 * @param array - The array to compact
 * @returns Returns the new array of filtered values
 * 
 * @example
 * compact([0, 1, false, 2, '', 3, null, undefined, NaN])
 * // => [1, 2, 3]
 */
export function compact<T>(array: T[]): NonNullable<T>[] {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array')
  }
  
  return array.filter((value): value is NonNullable<T> => Boolean(value))
}
