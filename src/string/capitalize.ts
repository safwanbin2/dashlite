/**
 * Converts the first character of string to upper case and the remaining to lower case.
 * 
 * @param str - The string to capitalize
 * @returns Returns the capitalized string
 * 
 * @example
 * capitalize('HELLO')
 * // => 'Hello'
 */
export function capitalize(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }
  
  if (str.length === 0) {
    return str
  }
  
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
