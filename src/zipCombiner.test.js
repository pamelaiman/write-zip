import { test, expect } from "@jest/globals";
import zipCombiner from "./zipCombiner.js";

test("return sum of corresponding pairs", () => {
    const arr1 = [1, 2, 3, 4];
    const arra2 = [5, 6, 7, 8];
    const sumTwoNumbers = (a, b) => a + b

    expect(zipCombiner(arr1, arra2, sumTwoNumbers)).toEqual([6, 8, 10, 12]);
  });

  test("find the lower of each pair", () => {
    const arr1 = [1, 20, 3, 400];
    const arra2 = [5, 6, 71, 8];
    const findLower = (a, b) => Math.min(a, b)

    expect(zipCombiner(arr1, arra2, findLower)).toEqual([1, 6, 3, 8]);
  });

  test("combines elements into an object", () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = ["ONE", "TWO"];

    const objectMaker = (a, b) => ({a, b})

    expect(zipCombiner(arr1, arr2, objectMaker)).toEqual([{
        "a": 1,
        "b": "ONE"
      }, {
        "a": 2,
        "b": "TWO"
      }]);
  });