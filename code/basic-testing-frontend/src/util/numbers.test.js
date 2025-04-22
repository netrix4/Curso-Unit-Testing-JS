import { describe, expect, it } from "vitest";
import { cleanNumbers } from "./numbers";
import { transformToNumber } from "./numbers";

describe("About numbers testin", () => {
  it("should return a valid number even if a spaces-problematic string is provided", () => {
    // AAA Asert, Action,

    // Arrange
    const spaceProblematicString = "   1997 ";

    // Action
    const bornYear = transformToNumber(spaceProblematicString);

    // Assert
    expect(bornYear).toBe(1997);
  });
  it("should throw an error if the provided value is non a valid number string", () => {
    //Arrange
    const alphaNumericValue = "1283756123A";
    // Act
    const returnedError = transformToNumber(alphaNumericValue);

    //Assert
    expect(returnedError).toBeInstanceOf(Error);
  });
  it("should accept negative and positive numbers", () => {
    // Arrange
    const positiveNumber = "299";
    const negativeNumber = "-199";
    // Act
    const positiveResponse = transformToNumber(positiveNumber);
    const negativeResponse = transformToNumber(negativeNumber);

    console.log("Responses: ", positiveNumber, negativeNumber);

    // Assertion
    expect(positiveResponse).toBeGreaterThan(0);
    expect(negativeResponse).toBeLessThan(0);
  });
});

describe("About cleanNumbers function", () => {
  it("should return an array of number values if an arrary of string number values is provided", 
    () => {
        const numberValues = ['1','2']
        const cleanedNumbers = cleanNumbers(numberValues)
        expect(cleanedNumbers[0]).toBeTypeOf('number')
    });
    it('should throw an error if an array with at least one empty string is provided', ()=>{
        const numberValues = [33,'',10]
        const tempFunct = ()=> {cleanNumbers(numberValues)}

        expect(tempFunct).toThrow()
    })
});
