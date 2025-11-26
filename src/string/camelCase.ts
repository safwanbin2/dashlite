/**
 * Converts string to camel case.
 * 
 * @param str - The string to convert
 * @returns Returns the camel cased string
 * 
 * @example
 * camelCase('Foo Bar')
 * // => 'fooBar'
 * 
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 * 
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */
export function camelCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }
  
  const words = str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_\-\s]+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  
  if (words.length === 0) {
    return ''
  }
  
  return words
    .map((word, index) => {
      word = word.toLowerCase()
      if (index === 0) {
        return word
      }
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('')
}
