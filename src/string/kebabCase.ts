/**
 * Converts string to kebab case.
 * 
 * @param str - The string to convert
 * @returns Returns the kebab cased string
 * 
 * @example
 * kebabCase('Foo Bar')
 * // => 'foo-bar'
 * 
 * kebabCase('fooBar')
 * // => 'foo-bar'
 * 
 * kebabCase('__FOO_BAR__')
 * // => 'foo-bar'
 */
export function kebabCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }
  
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]/g, '')
    .toLowerCase()
    .replace(/^-+|-+$/g, '')
}
