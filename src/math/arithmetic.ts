/**
 * Adds two numbers.
 *
 * @param augend - The first number in an addition
 * @param addend - The second number in an addition
 * @returns Returns the total
 *
 * @example
 * add(6, 4)
 * // => 10
 */
export function add(augend: number, addend: number): number {
  return augend + addend;
}

/**
 * Subtracts two numbers.
 *
 * @param minuend - The first number in a subtraction
 * @param subtrahend - The second number in a subtraction
 * @returns Returns the difference
 *
 * @example
 * subtract(6, 4)
 * // => 2
 */
export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

/**
 * Multiplies two numbers.
 *
 * @param multiplier - The first number in a multiplication
 * @param multiplicand - The second number in a multiplication
 * @returns Returns the product
 *
 * @example
 * multiply(6, 4)
 * // => 24
 */
export function multiply(multiplier: number, multiplicand: number): number {
  return multiplier * multiplicand;
}

/**
 * Divides two numbers.
 *
 * @param dividend - The first number in a division
 * @param divisor - The second number in a division
 * @returns Returns the quotient
 *
 * @example
 * divide(6, 4)
 * // => 1.5
 */
export function divide(dividend: number, divisor: number): number {
  return dividend / divisor;
}
