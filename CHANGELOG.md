# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-26

### Added

#### Array Utilities
- `chunk` - Split arrays into chunks of specified size
- `compact` - Remove falsy values from arrays
- `flatten` - Flatten arrays one level deep
- `flattenDeep` - Recursively flatten arrays
- `uniq` - Create duplicate-free arrays
- `uniqBy` - Create duplicate-free arrays with custom comparator

#### Object Utilities
- `pick` - Extract specific properties from objects
- `omit` - Remove specific properties from objects
- `merge` - Deep merge multiple objects
- `clone` - Deep clone objects with support for Date, RegExp, Map, Set

#### String Utilities
- `capitalize` - Capitalize first letter of strings
- `camelCase` - Convert strings to camelCase
- `kebabCase` - Convert strings to kebab-case
- `truncate` - Truncate strings with customizable length and omission

#### Function Utilities
- `debounce` - Debounce function calls with leading/trailing edge support
- `throttle` - Throttle function execution with configurable options
- `memoize` - Cache function results with custom resolver support

#### Type Utilities
- `isArray` - Type guard for arrays
- `isObject` - Type guard for plain objects
- `isEmpty` - Check if values are empty

### Features
- Full TypeScript support with comprehensive type definitions
- Dual ESM/CJS builds for maximum compatibility
- Tree-shakeable exports for optimal bundle sizes
- Zero runtime dependencies
- Comprehensive test coverage
- JSDoc documentation for all functions
