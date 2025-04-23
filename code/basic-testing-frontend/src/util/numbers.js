import { validateStringNotEmpty, validateNumber } from "./validation";

export function transformToNumber(value) {
  const letterRegex = /[a-zA-Z]/g;
  if (typeof value == "string") {
    value.trim();
    if (letterRegex.test(value)) {
      throw new Error("The provided value has one or more letters");
    }
  }
  return +value;
}

export function cleanNumbers(numberValues) {
  const numbers = [];
  for (const numberInput of numberValues) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
