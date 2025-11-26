/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * 
 * @param array - The array to process
 * @param size - The length of each chunk
 * @returns Returns the new array of chunks
 * 
 * @example
 * chunk([1, 2, 3, 4, 5], 2)
 * // => [[1, 2], [3, 4], [5]]
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array')
  }
  
  if (size < 1) {
    return []
  }
  
  const result: T[][] = []
  let index = 0
  
  while (index < array.length) {
    result.push(array.slice(index, index + size))
    index += size
  }
  
  return result
}
