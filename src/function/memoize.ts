/**
 * Creates a function that memoizes the result of func.
 * 
 * @param func - The function to have its output memoized
 * @param resolver - The function to resolve the cache key
 * @returns Returns the new memoized function
 * 
 * @example
 * const fibonacci = memoize((n: number): number => {
 *   if (n <= 1) return n
 *   return fibonacci(n - 1) + fibonacci(n - 2)
 * })
 * 
 * fibonacci(10) // Computed
 * fibonacci(10) // Cached
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T,
  resolver?: (...args: Parameters<T>) => any
): T & { cache: Map<any, any> } {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  
  const memoized = function (this: any, ...args: Parameters<T>) {
    const key = resolver ? resolver.apply(this, args) : args[0]
    const cache = memoized.cache
    
    if (cache.has(key)) {
      return cache.get(key)
    }
    
    const result = func.apply(this, args)
    cache.set(key, result)
    return result
  } as T & { cache: Map<any, any> }
  
  memoized.cache = new Map()
  
  return memoized
}
