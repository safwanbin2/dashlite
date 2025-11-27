import { describe, it, expect } from "vitest";
import {
  add,
  ceil,
  divide,
  floor,
  max,
  maxBy,
  mean,
  meanBy,
  min,
  minBy,
  multiply,
  round,
  subtract,
  sum,
  sumBy,
} from "../src/math";

describe("Math Utilities", () => {
  describe("add", () => {
    it("should add two numbers", () => {
      expect(add(6, 4)).toBe(10);
      expect(add(-5, 3)).toBe(-2);
      expect(add(0, 0)).toBe(0);
    });

    it("should handle decimal numbers", () => {
      expect(add(1.5, 2.3)).toBeCloseTo(3.8);
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers", () => {
      expect(subtract(6, 4)).toBe(2);
      expect(subtract(10, 15)).toBe(-5);
      expect(subtract(0, 0)).toBe(0);
    });

    it("should handle decimal numbers", () => {
      expect(subtract(5.5, 2.3)).toBeCloseTo(3.2);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers", () => {
      expect(multiply(6, 4)).toBe(24);
      expect(multiply(-5, 3)).toBe(-15);
      expect(multiply(0, 100)).toBe(0);
    });

    it("should handle decimal numbers", () => {
      expect(multiply(2.5, 4)).toBe(10);
      expect(multiply(1.5, 2)).toBe(3);
    });
  });

  describe("divide", () => {
    it("should divide two numbers", () => {
      expect(divide(6, 4)).toBe(1.5);
      expect(divide(10, 2)).toBe(5);
      expect(divide(-12, 3)).toBe(-4);
    });

    it("should handle decimal results", () => {
      expect(divide(7, 2)).toBe(3.5);
      expect(divide(1, 3)).toBeCloseTo(0.333, 2);
    });

    it("should handle division by zero", () => {
      expect(divide(5, 0)).toBe(Infinity);
    });
  });

  describe("ceil", () => {
    it("should round up to integer", () => {
      expect(ceil(4.006)).toBe(5);
      expect(ceil(4.1)).toBe(5);
      expect(ceil(4)).toBe(4);
    });

    it("should round up with precision", () => {
      expect(ceil(6.004, 2)).toBe(6.01);
      expect(ceil(6.004, 1)).toBe(6.1);
    });

    it("should handle negative precision", () => {
      expect(ceil(6040, -2)).toBe(6100);
      expect(ceil(1234, -3)).toBe(2000);
    });
  });

  describe("floor", () => {
    it("should round down to integer", () => {
      expect(floor(4.006)).toBe(4);
      expect(floor(4.9)).toBe(4);
      expect(floor(5)).toBe(5);
    });

    it("should round down with precision", () => {
      expect(floor(0.046, 2)).toBe(0.04);
      expect(floor(4.006, 2)).toBe(4);
    });

    it("should handle negative precision", () => {
      expect(floor(4060, -2)).toBe(4000);
      expect(floor(1234, -3)).toBe(1000);
    });
  });

  describe("round", () => {
    it("should round to nearest integer", () => {
      expect(round(4.006)).toBe(4);
      expect(round(4.5)).toBe(5);
      expect(round(4.4)).toBe(4);
    });

    it("should round with precision", () => {
      expect(round(4.006, 2)).toBe(4.01);
      expect(round(4.005, 2)).toBe(4.01);
    });

    it("should handle negative precision", () => {
      expect(round(4060, -2)).toBe(4100);
      expect(round(1234, -2)).toBe(1200);
    });
  });

  describe("max", () => {
    it("should return maximum value", () => {
      expect(max([4, 2, 8, 6])).toBe(8);
      expect(max([1, 2, 3])).toBe(3);
      expect(max([5])).toBe(5);
    });

    it("should handle negative numbers", () => {
      expect(max([-1, -5, -3])).toBe(-1);
      expect(max([-10, 5, 2])).toBe(5);
    });

    it("should return undefined for empty array", () => {
      expect(max([])).toBeUndefined();
    });
  });

  describe("maxBy", () => {
    it("should return max using iteratee", () => {
      const objects = [{ n: 1 }, { n: 2 }];
      expect(maxBy(objects, (o) => o.n)).toEqual({ n: 2 });
    });

    it("should work with complex objects", () => {
      const data = [{ x: 4 }, { x: 2 }, { x: 8 }, { x: 6 }];
      expect(maxBy(data, (o) => o.x)).toEqual({ x: 8 });
    });

    it("should return undefined for empty array", () => {
      expect(maxBy([], (o: any) => o.n)).toBeUndefined();
    });
  });

  describe("min", () => {
    it("should return minimum value", () => {
      expect(min([4, 2, 8, 6])).toBe(2);
      expect(min([1, 2, 3])).toBe(1);
      expect(min([5])).toBe(5);
    });

    it("should handle negative numbers", () => {
      expect(min([-1, -5, -3])).toBe(-5);
      expect(min([-10, 5, 2])).toBe(-10);
    });

    it("should return undefined for empty array", () => {
      expect(min([])).toBeUndefined();
    });
  });

  describe("minBy", () => {
    it("should return min using iteratee", () => {
      const objects = [{ n: 1 }, { n: 2 }];
      expect(minBy(objects, (o) => o.n)).toEqual({ n: 1 });
    });

    it("should work with complex objects", () => {
      const data = [{ x: 4 }, { x: 2 }, { x: 8 }, { x: 6 }];
      expect(minBy(data, (o) => o.x)).toEqual({ x: 2 });
    });

    it("should return undefined for empty array", () => {
      expect(minBy([], (o: any) => o.n)).toBeUndefined();
    });
  });

  describe("sum", () => {
    it("should calculate sum of values", () => {
      expect(sum([4, 2, 8, 6])).toBe(20);
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    it("should handle negative numbers", () => {
      expect(sum([-1, -2, -3])).toBe(-6);
      expect(sum([-5, 10, -3])).toBe(2);
    });

    it("should return 0 for empty array", () => {
      expect(sum([])).toBe(0);
    });

    it("should handle decimal numbers", () => {
      expect(sum([1.5, 2.5, 3])).toBe(7);
    });
  });

  describe("sumBy", () => {
    it("should calculate sum using iteratee", () => {
      const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
      expect(sumBy(objects, (o) => o.n)).toBe(20);
    });

    it("should work with complex calculations", () => {
      const data = [
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 4 },
      ];
      expect(sumBy(data, (o) => o.x + o.y)).toBe(15);
    });

    it("should return 0 for empty array", () => {
      expect(sumBy([], (o: any) => o.n)).toBe(0);
    });
  });

  describe("mean", () => {
    it("should calculate mean of values", () => {
      expect(mean([4, 2, 8, 6])).toBe(5);
      expect(mean([1, 2, 3, 4, 5])).toBe(3);
    });

    it("should handle decimal results", () => {
      expect(mean([1, 2, 3])).toBe(2);
      expect(mean([1, 2])).toBe(1.5);
    });

    it("should return NaN for empty array", () => {
      expect(mean([])).toBeNaN();
    });

    it("should handle negative numbers", () => {
      expect(mean([-2, 0, 2])).toBe(0);
    });
  });

  describe("meanBy", () => {
    it("should calculate mean using iteratee", () => {
      const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
      expect(meanBy(objects, (o) => o.n)).toBe(5);
    });

    it("should work with complex calculations", () => {
      const data = [{ x: 2 }, { x: 4 }, { x: 6 }];
      expect(meanBy(data, (o) => o.x)).toBe(4);
    });

    it("should return NaN for empty array", () => {
      expect(meanBy([], (o: any) => o.n)).toBeNaN();
    });
  });
});
