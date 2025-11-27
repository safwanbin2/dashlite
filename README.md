# dashlite

A modern, type-safe utility library similar to lodash, built with TypeScript and designed for modern JavaScript/TypeScript applications.

[**📚 Read the Documentation**](https://dashlite-ten.vercel.app/)

## Features

- 🎯 **Type-Safe**: Full TypeScript support with comprehensive type definitions
- 📦 **Tree-Shakeable**: ESM support for optimal bundle sizes
- 🔄 **Dual Format**: Both ESM and CommonJS builds included
- ✅ **Well-Tested**: Comprehensive test coverage
- 🚀 **Zero Dependencies**: No external runtime dependencies

## Installation

```bash
npm install dashlite
```

## Quick Start

```typescript
import { chunk, debounce, pick } from 'dashlite'

// Array manipulation
const chunks = chunk([1, 2, 3, 4, 5], 2)
// => [[1, 2], [3, 4], [5]]

// Object manipulation
const picked = pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])
// => { a: 1, c: 3 }

// Function utilities
const debouncedLog = debounce((msg: string) => console.log(msg), 1000)
debouncedLog('Hello')
```

## Documentation

For full API reference and interactive examples, visit our documentation site:
**[https://dashlite-ten.vercel.app/](https://dashlite-ten.vercel.app/)**

## License

MIT © Safwan
