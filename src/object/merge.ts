/**
 * Recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.
 * 
 * @param target - The destination object
 * @param sources - The source objects
 * @returns Returns the merged object
 * 
 * @example
 * merge({ a: 1 }, { b: 2 }, { c: 3 })
 * // => { a: 1, b: 2, c: 3 }
 * 
 * merge({ a: { b: 1 } }, { a: { c: 2 } })
 * // => { a: { b: 1, c: 2 } }
 */
export function merge<T extends object>(target: T, ...sources: Partial<T>[]): T {
  if (typeof target !== 'object' || target === null) {
    throw new TypeError('Expected an object')
  }
  
  for (const source of sources) {
    if (typeof source !== 'object' || source === null) {
      continue
    }
    
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const sourceValue = source[key]
        const targetValue = target[key as keyof T]
        
        if (
          isPlainObject(sourceValue) &&
          isPlainObject(targetValue)
        ) {
          target[key as keyof T] = merge(
            targetValue as any,
            sourceValue as any
          )
        } else {
          target[key as keyof T] = sourceValue as any
        }
      }
    }
  }
  
  return target
}

function isPlainObject(value: unknown): value is Record<string, any> {
  if (typeof value !== 'object' || value === null) {
    return false
  }
  
  const proto = Object.getPrototypeOf(value)
  return proto === Object.prototype || proto === null
}
