import { describe, it, expect } from "vitest";
import {
  chunk,
  compact,
  fill,
  findIndex,
  findLastIndex,
  first,
  flatten,
  flattenDeep,
  flattenDepth,
  fromPairs,
  head,
  indexOf,
  join,
  last,
  lastIndexOf,
  nth,
  pull,
  pullAll,
  pullAllBy,
  pullAllWith,
  pullAt,
  remove,
  reverse,
  slice,
  sortedIndex,
  sortedIndexBy,
  sortedIndexOf,
  sortedLastIndex,
  sortedLastIndexBy,
  sortedLastIndexOf,
  sortedUniq,
  sortedUniqBy,
  tail,
  take,
  takeRight,
  takeRightWhile,
  takeWhile,
  uniq,
  uniqBy,
} from "../src/array";

describe("Array Utilities", () => {
  describe("chunk", () => {
    it("should split array into chunks of specified size", () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
        [1, 2, 3],
        [4, 5, 6],
      ]);
    });

    it("should return empty array for size less than 1", () => {
      expect(chunk([1, 2, 3], 0)).toEqual([]);
      expect(chunk([1, 2, 3], -1)).toEqual([]);
    });

    it("should throw error for non-array input", () => {
      expect(() => chunk("not an array" as any, 2)).toThrow(TypeError);
    });
  });

  describe("compact", () => {
    it("should remove all falsy values", () => {
      expect(compact([0, 1, false, 2, "", 3, null, undefined, NaN])).toEqual([
        1, 2, 3,
      ]);
    });

    it("should return empty array for all falsy values", () => {
      expect(compact([null, undefined, false, 0, ""])).toEqual([]);
    });

    it("should throw error for non-array input", () => {
      expect(() => compact("not an array" as any)).toThrow(TypeError);
    });
  });

  describe("flatten", () => {
    it("should flatten array one level deep", () => {
      expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
    });

    it("should handle already flat arrays", () => {
      expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it("should throw error for non-array input", () => {
      expect(() => flatten("not an array" as any)).toThrow(TypeError);
    });
  });

  describe("flattenDeep", () => {
    it("should recursively flatten array", () => {
      expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
    });

    it("should handle already flat arrays", () => {
      expect(flattenDeep([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it("should throw error for non-array input", () => {
      expect(() => flattenDeep("not an array" as any)).toThrow(TypeError);
    });
  });

  describe("uniq", () => {
    it("should create duplicate-free array", () => {
      expect(uniq([2, 1, 2])).toEqual([2, 1]);
      expect(uniq([1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3]);
    });

    it("should handle empty arrays", () => {
      expect(uniq([])).toEqual([]);
    });

    it("should throw error for non-array input", () => {
      expect(() => uniq("not an array" as any)).toThrow(TypeError);
    });
  });

  describe("uniqBy", () => {
    it("should create duplicate-free array using iteratee", () => {
      expect(uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
    });

    it("should work with object properties", () => {
      const result = uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], (o) => o.x);
      expect(result).toEqual([{ x: 1 }, { x: 2 }]);
    });

    it("should throw error for non-array input", () => {
      expect(() => uniqBy("not an array" as any, (x) => x)).toThrow(TypeError);
    });
  });

  describe("fill", () => {
    it("should fill array with value", () => {
      const array = [1, 2, 3];
      expect(fill(array, "a")).toEqual(["a", "a", "a"]);
    });

    it("should fill array with start and end", () => {
      expect(fill([4, 6, 8, 10], "*", 1, 3)).toEqual([4, "*", "*", 10]);
    });

    it("should handle negative indexes", () => {
      expect(fill([1, 2, 3], "a", -2, -1)).toEqual([1, "a", 3]);
    });
  });

  describe("findIndex", () => {
    it("should return index of first element predicate returns truthy for", () => {
      const users = [
        { user: "barney", active: false },
        { user: "fred", active: false },
        { user: "pebbles", active: true },
      ];
      expect(findIndex(users, (o) => o.user === "barney")).toBe(0);
      expect(findIndex(users, (o) => o.active)).toBe(2);
    });

    it("should return -1 when not found", () => {
      expect(findIndex([1, 2, 3], (n) => n === 5)).toBe(-1);
    });
  });

  describe("findLastIndex", () => {
    it("should return index of last element predicate returns truthy for", () => {
      const users = [
        { user: "barney", active: true },
        { user: "fred", active: false },
        { user: "pebbles", active: false },
      ];
      expect(findLastIndex(users, (o) => o.user === "pebbles")).toBe(2);
    });

    it("should return -1 when not found", () => {
      expect(findLastIndex([1, 2, 3], (n) => n === 5)).toBe(-1);
    });
  });

  describe("first/head", () => {
    it("should return first element", () => {
      expect(first([1, 2, 3])).toBe(1);
      expect(head([1, 2, 3])).toBe(1);
    });

    it("should return undefined for empty array", () => {
      expect(first([])).toBeUndefined();
      expect(head([])).toBeUndefined();
    });
  });

  describe("flattenDepth", () => {
    it("should flatten array to specified depth", () => {
      const array = [1, [2, [3, [4]], 5]];
      expect(flattenDepth(array, 1)).toEqual([1, 2, [3, [4]], 5]);
      expect(flattenDepth(array, 2)).toEqual([1, 2, 3, [4], 5]);
    });
  });

  describe("fromPairs", () => {
    it("should convert pairs to object", () => {
      expect(
        fromPairs([
          ["a", 1],
          ["b", 2],
        ])
      ).toEqual({ a: 1, b: 2 });
    });
  });

  describe("indexOf", () => {
    it("should return index of value", () => {
      expect(indexOf([1, 2, 1, 2], 2)).toBe(1);
      expect(indexOf([1, 2, 1, 2], 2, 2)).toBe(3);
    });

    it("should return -1 when not found", () => {
      expect(indexOf([1, 2, 3], 5)).toBe(-1);
    });
  });

  describe("join", () => {
    it("should join array elements", () => {
      expect(join(["a", "b", "c"], "~")).toBe("a~b~c");
      expect(join(["a", "b", "c"])).toBe("a,b,c");
    });
  });

  describe("last", () => {
    it("should return last element", () => {
      expect(last([1, 2, 3])).toBe(3);
    });

    it("should return undefined for empty array", () => {
      expect(last([])).toBeUndefined();
    });
  });

  describe("lastIndexOf", () => {
    it("should return last index of value", () => {
      expect(lastIndexOf([1, 2, 1, 2], 2)).toBe(3);
      expect(lastIndexOf([1, 2, 1, 2], 2, 2)).toBe(1);
    });
  });

  describe("nth", () => {
    it("should return element at index", () => {
      expect(nth(["a", "b", "c", "d"], 1)).toBe("b");
      expect(nth(["a", "b", "c", "d"], -2)).toBe("c");
    });
  });

  describe("pull", () => {
    it("should remove values from array", () => {
      const array = ["a", "b", "c", "a", "b", "c"];
      pull(array, "a", "c");
      expect(array).toEqual(["b", "b"]);
    });
  });

  describe("pullAll", () => {
    it("should remove array of values", () => {
      const array = ["a", "b", "c", "a", "b", "c"];
      pullAll(array, ["a", "c"]);
      expect(array).toEqual(["b", "b"]);
    });
  });

  describe("pullAllBy", () => {
    it("should remove values using iteratee", () => {
      const array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
      pullAllBy(array, [{ x: 1 }, { x: 3 }], (o) => o.x);
      expect(array).toEqual([{ x: 2 }]);
    });
  });

  describe("pullAllWith", () => {
    it("should remove values using comparator", () => {
      const array = [
        { x: 1, y: 2 },
        { x: 3, y: 4 },
        { x: 5, y: 6 },
      ];
      pullAllWith(
        array,
        [{ x: 3, y: 4 }],
        (a, b) => a.x === b.x && a.y === b.y
      );
      expect(array).toEqual([
        { x: 1, y: 2 },
        { x: 5, y: 6 },
      ]);
    });
  });

  describe("pullAt", () => {
    it("should remove elements at indexes", () => {
      const array = ["a", "b", "c", "d"];
      const pulled = pullAt(array, [1, 3]);
      expect(array).toEqual(["a", "c"]);
      expect(pulled).toEqual(["b", "d"]);
    });
  });

  describe("remove", () => {
    it("should remove elements predicate returns truthy for", () => {
      const array = [1, 2, 3, 4];
      const evens = remove(array, (n) => n % 2 === 0);
      expect(array).toEqual([1, 3]);
      expect(evens).toEqual([2, 4]);
    });
  });

  describe("reverse", () => {
    it("should reverse array", () => {
      const array = [1, 2, 3];
      expect(reverse(array)).toEqual([3, 2, 1]);
    });
  });

  describe("slice", () => {
    it("should slice array", () => {
      expect(slice([1, 2, 3], 0, 2)).toEqual([1, 2]);
      expect(slice([1, 2, 3], 1)).toEqual([2, 3]);
    });
  });

  describe("sortedIndex", () => {
    it("should return insertion index", () => {
      expect(sortedIndex([30, 50], 40)).toBe(1);
    });
  });

  describe("sortedIndexBy", () => {
    it("should return insertion index using iteratee", () => {
      const objects = [{ x: 4 }, { x: 5 }];
      expect(sortedIndexBy(objects, { x: 4 }, (o) => o.x)).toBe(0);
    });
  });

  describe("sortedIndexOf", () => {
    it("should return index using binary search", () => {
      expect(sortedIndexOf([4, 5, 5, 5, 6], 5)).toBe(1);
    });
  });

  describe("sortedLastIndex", () => {
    it("should return last insertion index", () => {
      expect(sortedLastIndex([4, 5, 5, 5, 6], 5)).toBe(4);
    });
  });

  describe("sortedLastIndexBy", () => {
    it("should return last insertion index using iteratee", () => {
      const objects = [{ x: 4 }, { x: 5 }];
      expect(sortedLastIndexBy(objects, { x: 4 }, (o) => o.x)).toBe(1);
    });
  });

  describe("sortedLastIndexOf", () => {
    it("should return last index using binary search", () => {
      expect(sortedLastIndexOf([4, 5, 5, 5, 6], 5)).toBe(3);
    });
  });

  describe("sortedUniq", () => {
    it("should return unique values from sorted array", () => {
      expect(sortedUniq([1, 1, 2])).toEqual([1, 2]);
    });
  });

  describe("sortedUniqBy", () => {
    it("should return unique values using iteratee", () => {
      expect(sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)).toEqual([1, 2]);
    });
  });

  describe("tail", () => {
    it("should return all but first element", () => {
      expect(tail([1, 2, 3])).toEqual([2, 3]);
    });
  });

  describe("take", () => {
    it("should take n elements from beginning", () => {
      expect(take([1, 2, 3])).toEqual([1]);
      expect(take([1, 2, 3], 2)).toEqual([1, 2]);
    });
  });

  describe("takeRight", () => {
    it("should take n elements from end", () => {
      expect(takeRight([1, 2, 3])).toEqual([3]);
      expect(takeRight([1, 2, 3], 2)).toEqual([2, 3]);
    });
  });

  describe("takeRightWhile", () => {
    it("should take elements from end while predicate is true", () => {
      const users = [
        { user: "barney", active: true },
        { user: "fred", active: false },
        { user: "pebbles", active: false },
      ];
      expect(takeRightWhile(users, (o) => !o.active)).toEqual([
        { user: "fred", active: false },
        { user: "pebbles", active: false },
      ]);
    });
  });

  describe("takeWhile", () => {
    it("should take elements from beginning while predicate is true", () => {
      const users = [
        { user: "barney", active: false },
        { user: "fred", active: false },
        { user: "pebbles", active: true },
      ];
      expect(takeWhile(users, (o) => !o.active)).toEqual([
        { user: "barney", active: false },
        { user: "fred", active: false },
      ]);
    });
  });
});
