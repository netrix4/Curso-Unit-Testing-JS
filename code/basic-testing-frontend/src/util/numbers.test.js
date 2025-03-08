import { describe, expect, it } from "vitest";
import { cleanNumbers } from "./numbers";

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
