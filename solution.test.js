const FixEquation = require("./solution.js");

describe("FixEquation Tests", () => {
  const fixEquation = new FixEquation();

  test("Test Case 1 : 42 * 47 + 2 = 1?76", () => {
    expect(fixEquation.findMissingDigit("42 * 47 + 2 = 1?76")).toBe(9);
  });

  test("Test Case 2 : 4? * 47 + 2 = 1976", () => {
    expect(fixEquation.findMissingDigit("4? * 47 + 2 = 1976")).toBe(2);
  });

  test("Test Case 3 : 42 * ?7 + 2 = 1976", () => {
    expect(fixEquation.findMissingDigit("42 * ?7 + 2 = 1976")).toBe(4);
  });

  test("Test Case 4 : 42 * ?47 + 2 = 1976", () => {
    expect(fixEquation.findMissingDigit("42 * ?47 + 2 = 1976")).toBe(-1);
  });

  test("Test Case 5 : 2 * 12? + 2 = 247", () => {
    expect(fixEquation.findMissingDigit("2 * 12? + 2 = 247")).toBe(-1);
  });
});
