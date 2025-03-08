import {
  it,
  describe,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
} from "vitest";

import { User } from "./hooks";

const testEmail = "test@test.com";
const user = new User(testEmail);

// concurrent make all the test from a describe group ejecutable at the same time
// although adding it in in a few items is possbile with the same effects

describe.concurrent("About hooks", () => {
  beforeAll(() => {
    console.log("Lets get started with all test :)");
  });

  beforeEach(() => {
    user.updateEmail(testEmail);
  });

  it("should update the email", () => {
    const newTestEmail = "test2@test.com";

    user.updateEmail(newTestEmail);

    expect(user.email).toBe(newTestEmail);
  });

  it("should have an email property", () => {
    expect(user).toHaveProperty("email");
  });

  it("should store the provided email value", () => {
    expect(user.email).toBe(testEmail);
  });

  it("should clear the email", () => {
    user.clearEmail();

    expect(user.email).toBe("");
  });

  it("should still have an email property after clearing the email", () => {
    user.clearEmail();

    expect(user).toHaveProperty("email");
  });
});
