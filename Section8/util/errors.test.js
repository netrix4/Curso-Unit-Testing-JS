import { HttpError, ValidationError } from "./errors";
import { expect, it, vi, describe } from "vitest";

describe("About HttpError class testing", () => {
  it("should create an instance of its class if parameters are passed", () => {
    const statuscode = 404;
    const message = "Not found";
    const data = {
      title: "title",
      data: "data",
    };

    const newHttpError = new HttpError(statuscode, message, data);
    expect(newHttpError).toBeInstanceOf(HttpError);
  });
});

describe("About ValidationError class testing", () => {
  it("should create an instance of its class if parameters are passed", () => {
    const newMessage = "This is a messsage xd";

    const newValidationError = new ValidationError(newMessage);

    expect(newValidationError).toBeInstanceOf(ValidationError);
  });
});
