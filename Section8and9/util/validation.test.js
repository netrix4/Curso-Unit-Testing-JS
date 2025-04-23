import { validateNotEmpty } from "./validation";
import { expect, it, vi, describe } from "vitest";

describe("About validateNotEmpty() from validation", () => {
  it("should validate that a privided string is not empty", () => {
    // Arrange, action, assert
    const emptyString = "";
    const errorMessage = "Error string must be provided";

    const errorResponseFunc = () => {
      validateNotEmpty(emptyString, errorMessage);
    };

    // expect(errorResponseFunc).toThrow(/[a-zA-Z]/);
    expect(errorResponseFunc).toThrow(/must be provided/);
  });
  it("should not throw an error if all arguments are provided", () => {
    const notEmptyTitle = "This is a title";
    const ifEmptyErrorMessage = "Title is not optional";

    const notErrorFunction = () => {
      validateNotEmpty(notEmptyTitle, ifEmptyErrorMessage);
    };

    expect(notErrorFunction).not.toThrow();
  });
});
