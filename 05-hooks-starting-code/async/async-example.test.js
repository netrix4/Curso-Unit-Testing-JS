import { describe, expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

describe("About jwt", () => {
  it("should generate a token value", (done) => {
    const testUserEmail = "netrix4@test.com";

    generateToken(testUserEmail, (err, token) => {
      expect(token).toBeDefined();
      done()
    });
  });
  it('should generate a token value', ()=>{
    const testUserEmail = "netrix4@test.com";
    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined()
  })

  it('should generate a token value second promise', async ()=>{
    const testUserEmail = "netrix4@test.com";
    const promiseResponse = await generateTokenPromise(testUserEmail)

    expect(promiseResponse).toBeDefined()
  })
});
