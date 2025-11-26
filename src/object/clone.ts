/**
 * Creates a deep clone of value.
 * 
 * @param value - The value to clone
 * @returns Returns the cloned value
 * 
 * @example
 * const obj = { a: 1, b: { c: 2 } }
 * const cloned = clone(obj)
 * cloned.b.c = 3
 * console.log(obj.b.c) // => 2
 */
export function clone<T>(value: T): T {
  // Handle primitive types
  if (value === null || typeof value !== 'object') {
    return value
  }
  
  // Handle Date
  if (value instanceof Date) {
    return new Date(value.getTime()) as T
  }
  
  // Handle Array
  if (Array.isArray(value)) {
    return value.map(item => clone(item)) as T
  }
  
  // Handle RegExp
  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags) as T
  }
  
  // Handle Map
  if (value instanceof Map) {
    const clonedMap = new Map()
    value.forEach((val, key) => {
      clonedMap.set(clone(key), clone(val))
    })
    return clonedMap as T
  }
  
  // Handle Set
  if (value instanceof Set) {
    const clonedSet = new Set()
    value.forEach(val => {
      clonedSet.add(clone(val))
    })
    return clonedSet as T
  }
  
  // Handle Object
  if (value instanceof Object) {
    const clonedObj = {} as T
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        clonedObj[key] = clone(value[key])
      }
    }
    return clonedObj
  }
  
  return value
}
