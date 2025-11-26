/**
 * Truncates string if it's longer than the given maximum string length.
 * 
 * @param str - The string to truncate
 * @param options - The options object
 * @returns Returns the truncated string
 * 
 * @example
 * truncate('hi-diddly-ho there, neighborino')
 * // => 'hi-diddly-ho there, neighbo...'
 * 
 * truncate('hi-diddly-ho there, neighborino', { length: 24 })
 * // => 'hi-diddly-ho there, n...'
 * 
 * truncate('hi-diddly-ho there, neighborino', { omission: ' [...]' })
 * // => 'hi-diddly-ho there, neig [...]'
 */
export function truncate(
  str: string,
  options: {
    length?: number
    omission?: string
  } = {}
): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }
  
  const { length = 30, omission = '...' } = options
  
  if (str.length <= length) {
    return str
  }
  
  const end = length - omission.length
  
  if (end < 1) {
    return omission
  }
  
  return str.slice(0, end) + omission
}
