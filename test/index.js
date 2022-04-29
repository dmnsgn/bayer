import test from "node:test";
import assert from "node:assert";

import bayer from "../index.js";

const bayer2 = [
  [0, 2],
  [3, 1],
];

const bayer4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

test("should return the default matrix at size 2", (t) => {
  assert.deepStrictEqual(bayer(), bayer2);
});

test("should compute matrix at size 4", (t) => {
  assert.deepStrictEqual(bayer(4), bayer4);
});

test("should throw for non power of two", (t) => {
  try {
    bayer(3);
  } catch (error) {
    return assert.ok(1);
  }
  assert.fail();
});
