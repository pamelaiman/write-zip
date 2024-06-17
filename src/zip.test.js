import { test, expect } from "@jest/globals";
import zip from "./zip.js";

test("returns a new array of corresponding pairs", () => {
    const arr1 = [1, 2, 3, 4];
    const arra2 = ["a", "b"];
    expect(zip(arr1, arra2)).toEqual([[1, "a"], [2, "b"]]);
  });

  test("returns a new array of corresponding pairs", () => {
    const arr1 = [1, 2, 3, 4];
    const arra2 = [1, 2, 3, 4];
    expect(zip(arr1, arra2)).toEqual([[1, 1], [2, 2], [3, 3], [4, 4]]);
  });

  test("one empty array and returns an empty array", () => {
    const arr1 = [];
    const arra2 = ["a", "b"];
    expect(zip(arr1, arra2)).toEqual([]);
  });

  test("takes two emptyr arrays and returns an empty array", () => {
    const arr1 = [];
    const arra2 = [];
    expect(zip(arr1, arra2)).toEqual([]);
  });

  test("returns a new array of corresponding pairs", () => {
    const arr1 = [1, 2, 3, 4];
    const arra2 = [5, 6, 7, 8];
    expect(zip(arr1, arra2)).toEqual([[1, 5], [2, 6], [3, 7], [4, 8]]);
  });
