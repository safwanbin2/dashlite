# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-11-27

### Added

#### Array Utilities (28 new functions)
- `fill` - Fill array elements with value
- `findIndex` - Find index of first element matching predicate
- `findLastIndex` - Find index from right to left
- `first` / `head` - Get first element of array
- `flattenDepth` - Flatten array to specified depth
- `fromPairs` - Create object from key-value pairs
- `indexOf` - Get index of value in array
- `join` - Join array elements into string
- `last` - Get last element of array
- `lastIndexOf` - Get last index of value
- `nth` - Get element at index (supports negative)
- `pull` - Remove all given values from array
- `pullAll` - Remove array of values
- `pullAllBy` - Remove values using iteratee
- `pullAllWith` - Remove values using comparator
- `pullAt` - Remove elements at indexes
- `remove` - Remove elements matching predicate
- `reverse` - Reverse array
- `slice` - Create slice of array
- `sortedIndex` - Binary search for insertion index
- `sortedIndexBy` - Sorted index with iteratee
- `sortedIndexOf` - Binary search indexOf
- `sortedLastIndex` - Highest insertion index
- `sortedLastIndexBy` - Last index with iteratee
- `sortedLastIndexOf` - Binary search lastIndexOf
- `sortedUniq` - Remove duplicates from sorted array
- `sortedUniqBy` - Sorted uniq with iteratee
- `tail` - Get all but first element
- `take` - Take n elements from beginning
- `takeRight` - Take n elements from end
- `takeRightWhile` - Take from end while predicate is true
- `takeWhile` - Take from beginning while predicate is true

#### Math Utilities (15 new functions)
- `add` - Add two numbers
- `ceil` - Round up with precision
- `divide` - Divide two numbers
- `floor` - Round down with precision
- `max` - Find maximum value in array
- `maxBy` - Find max with iteratee
- `mean` - Calculate average of values
- `meanBy` - Calculate mean with iteratee
- `min` - Find minimum value in array
- `minBy` - Find min with iteratee
- `multiply` - Multiply two numbers
- `round` - Round to precision
- `subtract` - Subtract two numbers
- `sum` - Sum array values
- `sumBy` - Sum with iteratee

### Improved
- Enhanced TypeScript type definitions
- Added 95 new test cases (total: 151 tests)
- Improved documentation with more examples

### Technical
- Total utilities increased from 20 to 63
- 6 categories: Array, Function, Math, Object, String, Type
- Full test coverage for all new utilities

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
