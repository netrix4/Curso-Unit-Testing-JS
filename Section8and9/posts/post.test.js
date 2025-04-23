import { beforeEach, describe, expect, it } from "vitest";
import { extractPostData } from "./posts";

const testTitle = "Titleee";
const testContent = "Test contentt";
let testDataForm;

describe("About extractPostData() testing", () => {
  beforeEach(() => {
    testDataForm = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  });
  it("should extract title and content from the provided form data", () => {
    const data = extractPostData(testDataForm);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});
