/**
 * Computes number rounded up to precision.
 *
 * @param number - The number to round up
 * @param precision - The precision to round up to
 * @returns Returns the rounded up number
 *
 * @example
 * ceil(4.006)
 * // => 5
 *
 * ceil(6.004, 2)
 * // => 6.01
 *
 * ceil(6040, -2)
 * // => 6100
 */
export function ceil(number: number, precision: number = 0): number {
  const multiplier = Math.pow(10, precision);
  return Math.ceil(number * multiplier) / multiplier;
}

/**
 * Computes number rounded down to precision.
 *
 * @param number - The number to round down
 * @param precision - The precision to round down to
 * @returns Returns the rounded down number
 *
 * @example
 * floor(4.006)
 * // => 4
 *
 * floor(0.046, 2)
 * // => 0.04
 *
 * floor(4060, -2)
 * // => 4000
 */
export function floor(number: number, precision: number = 0): number {
  const multiplier = Math.pow(10, precision);
  return Math.floor(number * multiplier) / multiplier;
}

/**
 * Computes number rounded to precision.
 *
 * @param number - The number to round
 * @param precision - The precision to round to
 * @returns Returns the rounded number
 *
 * @example
 * round(4.006)
 * // => 4
 *
 * round(4.006, 2)
 * // => 4.01
 *
 * round(4060, -2)
 * // => 4100
 */
export function round(number: number, precision: number = 0): number {
  const multiplier = Math.pow(10, precision);
  return Math.round(number * multiplier) / multiplier;
}
