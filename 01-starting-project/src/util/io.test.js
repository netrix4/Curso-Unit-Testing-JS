import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it("should execute the writerfile method", () => {
  const testData = "Test";
  const tesFileName = "test.txt";
  writeData(testData, tesFileName);

  //   return expect(writeData(testData, tesFileName)).resolves.toBeUndefined()
  //   expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(tesFileName, testData);
});

it("should return a promise that resolves to no value if called correctly", () => {
  const testData = "Test";
  const tesFileName = "test.txt";
  writeData(testData, tesFileName);

  return expect(writeData(testData, tesFileName)).resolves.toBeUndefined();
  //   expect(fs.writeFile).toBeCalled();
  //   expect(fs.writeFile).toBeCalledWith(tesFileName, testData);
});
