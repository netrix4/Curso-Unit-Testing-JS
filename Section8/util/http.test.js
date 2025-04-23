import { it, describe, expect, vi } from "vitest";
import { sendDataRequest } from "./http";
import { HttpError } from "./errors";

const testResponseData = { testKey: "testdata" };
const testFetch = vi.fn(async (url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string");
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);

describe("About http.js testing", () => {
  it("should return any available reponse data", () => {
    const a = { key: 0 };

    return expect(sendDataRequest(a)).resolves.toEqual(testResponseData);
  });
  it("should convert the provided data to json before sending th request", async () => {
    const a = { key: 0 };
    let errorMessage = "";
    try {
      await sendDataRequest(a);
    } catch (error) {
      errorMessage = error;
    }
    expect(errorMessage).not.toBe("Not to be a string");
  });
  it("should throw an HttpError in case of non ok response", () => {
    testFetch.mockImplementationOnce((url, options) => {
      return new Promise((resolve, reject) => {
        const testResponse = {
          ok: false,
          json() {
            return new Promise((resolve, reject) => {
              resolve(testResponseData);
            });
          },
        };
        resolve(testResponse);
      });
    });

    const testData = { key: 0 };

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});
