import { it, expect, describe, vi } from "vitest";
import { generateReportData } from "./data";

describe("About generateReports()", () => {
  it("should execute logFn() if data is provided", () => {
    const testFunction = vi.fn();

    // testFunction.mockImplementation(() => {});

    generateReportData(testFunction);
    expect(testFunction).toBeCalled();
  });
});
