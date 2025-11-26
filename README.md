# dashlite

A modern, type-safe utility library similar to lodash, built with TypeScript and designed for modern JavaScript/TypeScript applications.

## Features

- 🎯 **Type-Safe**: Full TypeScript support with comprehensive type definitions
- 📦 **Tree-Shakeable**: ESM support for optimal bundle sizes
- 🔄 **Dual Format**: Both ESM and CommonJS builds included
- ✅ **Well-Tested**: Comprehensive test coverage
- 📝 **Well-Documented**: JSDoc comments for all functions
- 🚀 **Zero Dependencies**: No external runtime dependencies

## Installation

```bash
npm install dashlite
```

## Usage

### ESM (Recommended)

```typescript
import { chunk, debounce, pick } from 'dashlite'

// Use the utilities
const chunks = chunk([1, 2, 3, 4, 5], 2)
// => [[1, 2], [3, 4], [5]]
```

### CommonJS

```javascript
const { chunk, debounce, pick } = require('dashlite')
```

## API Reference

### Array Utilities

#### `chunk<T>(array: T[], size: number): T[][]`

Creates an array of elements split into groups the length of size.

```typescript
chunk([1, 2, 3, 4, 5], 2)
// => [[1, 2], [3, 4], [5]]
```

#### `compact<T>(array: T[]): NonNullable<T>[]`

Creates an array with all falsy values removed.

```typescript
compact([0, 1, false, 2, '', 3, null, undefined, NaN])
// => [1, 2, 3]
```

#### `flatten<T>(array: T[]): T[]`

Flattens array a single level deep.

```typescript
flatten([1, [2, [3, [4]], 5]])
// => [1, 2, [3, [4]], 5]
```

#### `flattenDeep<T>(array: T[]): any[]`

Recursively flattens array.

```typescript
flattenDeep([1, [2, [3, [4]], 5]])
// => [1, 2, 3, 4, 5]
```

#### `uniq<T>(array: T[]): T[]`

Creates a duplicate-free version of an array.

```typescript
uniq([2, 1, 2])
// => [2, 1]
```

#### `uniqBy<T, U>(array: T[], iteratee: (value: T) => U): T[]`

Creates a duplicate-free version of an array using a comparator function.

```typescript
uniqBy([2.1, 1.2, 2.3], Math.floor)
// => [2.1, 1.2]

uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], (o) => o.x)
// => [{ x: 1 }, { x: 2 }]
```

### Object Utilities

#### `pick<T, K>(obj: T, keys: K[]): Pick<T, K>`

Creates an object composed of the picked object properties.

```typescript
pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])
// => { a: 1, c: 3 }
```

#### `omit<T, K>(obj: T, keys: K[]): Omit<T, K>`

Creates an object composed of properties that are not omitted.

```typescript
omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])
// => { b: 2 }
```

#### `merge<T>(target: T, ...sources: Partial<T>[]): T`

Recursively merges objects.

```typescript
merge({ a: { b: 1 } }, { a: { c: 2 } })
// => { a: { b: 1, c: 2 } }
```

#### `clone<T>(value: T): T`

Creates a deep clone of value.

```typescript
const obj = { a: 1, b: { c: 2 } }
const cloned = clone(obj)
cloned.b.c = 3
console.log(obj.b.c) // => 2
```

### String Utilities

#### `capitalize(str: string): string`

Converts the first character of string to upper case.

```typescript
capitalize('hello')
// => 'Hello'
```

#### `camelCase(str: string): string`

Converts string to camel case.

```typescript
camelCase('Foo Bar')
// => 'fooBar'
```

#### `kebabCase(str: string): string`

Converts string to kebab case.

```typescript
kebabCase('fooBar')
// => 'foo-bar'
```

#### `truncate(str: string, options?: { length?: number; omission?: string }): string`

Truncates string if it's longer than the given maximum string length.

```typescript
truncate('hi-diddly-ho there, neighborino')
// => 'hi-diddly-ho there, neighbo...'

truncate('hi-diddly-ho there, neighborino', { length: 24 })
// => 'hi-diddly-ho there, n...'
```

### Function Utilities

#### `debounce<T>(func: T, wait?: number, options?: { leading?: boolean; trailing?: boolean; maxWait?: number }): T`

Creates a debounced function that delays invoking func.

```typescript
const debounced = debounce(() => console.log('Hello'), 1000)
debounced()
debounced()
debounced()
// => 'Hello' (only once after 1000ms)

// Cancel pending invocations
debounced.cancel()

// Immediately invoke pending function
debounced.flush()
```

#### `throttle<T>(func: T, wait?: number, options?: { leading?: boolean; trailing?: boolean }): T`

Creates a throttled function that only invokes func at most once per every wait milliseconds.

```typescript
const throttled = throttle(() => console.log('Hello'), 1000)
throttled()
throttled()
throttled()
// => 'Hello' (immediately, then once more after 1000ms if called again)
```

#### `memoize<T>(func: T, resolver?: (...args: Parameters<T>) => any): T`

Creates a function that memoizes the result of func.

```typescript
const fibonacci = memoize((n: number): number => {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
})

fibonacci(10) // Computed
fibonacci(10) // Cached
```

### Type Utilities

#### `isArray(value: unknown): value is any[]`

Checks if value is classified as an Array object.

```typescript
isArray([1, 2, 3])
// => true

isArray('abc')
// => false
```

#### `isObject(value: unknown): value is Record<string, any>`

Checks if value is a plain object.

```typescript
isObject({})
// => true

isObject([1, 2, 3])
// => false
```

#### `isEmpty(value: unknown): boolean`

Checks if value is empty.

```typescript
isEmpty(null)
// => true

isEmpty([1, 2, 3])
// => false
```

## TypeScript Support

This library is written in TypeScript and includes comprehensive type definitions. All functions are fully typed with generics where appropriate.

```typescript
import { chunk, pick } from '@safwan/utils'

// Type inference works automatically
const numbers = chunk([1, 2, 3, 4, 5], 2) // Type: number[][]

// Type-safe object manipulation
const obj = { a: 1, b: 2, c: 3 }
const picked = pick(obj, ['a', 'c']) // Type: { a: number; c: number }
```

## Browser Support

This library supports all modern browsers and Node.js 14+.

## License

MIT © Safwan

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Repository

https://github.com/safwanbin2/dashlite
