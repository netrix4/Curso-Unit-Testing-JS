import { describe, it, expect } from "vitest";
import { add } from "./math";

describe("For add() function", () => {
  it("Should make a summatory from an array", () => {
    // Arrange
    const numbers = [2, 5, 1, 5, 12, 6, 0];
    // Act
    const res = add(numbers);

    // Assert
    const calculatedRes = numbers.reduce(
      (previous, current) => previous + current
    );
    expect(res).toBe(calculatedRes);
  });

  it("Should yeild NaN if a least one invalid number is provided", () => {
    const array = ["Not a number", 99];
    const response = add(array);

    expect(response).toBeNaN();
  });

  it("Should yield a correct sum if an array of numeric string values is provided", () => {
    const array = ["2", "33"];
    const actualResult = add(array);

    const expectedResult = array.reduce(
      (prevItem, actualItem) => +prevItem + +actualItem,
      0
    );

    expect(actualResult).toBe(expectedResult);
  });

  it("should yield 0 if an empty array is provided", () => {
    const array = [];

    const secondResponse = add(array);

    expect(secondResponse).toBe(0);
  });

  it("should throw an error on no arguments passed", () => {
    const emptyFn = () => {
      add();
    };

    expect(emptyFn).toThrow();
  });
});
