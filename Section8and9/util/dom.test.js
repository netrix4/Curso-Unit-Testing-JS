import fs from "fs";
import path from "path";
import { Window } from "happy-dom";
import { it, expect, describe, vi, beforeEach } from "vitest";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const newWin = new Window();
const doc = newWin.document;
doc.write(htmlDocumentContent);
vi.stubGlobal("document", doc);

describe("About happy-dom testing", () => {
  beforeEach(() => {
    doc.body.innerHTML = "";
    doc.write(htmlDocumentContent);
  });
  it("should add a erro paragrph to the id called element", () => {
    showError("This is an error");
    const errorElement = doc.getElementById("errors");
    const errorParagrph = errorElement.firstElementChild;
    expect(errorParagrph).not.toBeNull();
  });
  it("should not containt an error paragraph initially", () => {
    const errorElement = doc.getElementById("errors");
    const errorParagrph = errorElement.firstElementChild;
    expect(errorParagrph).toBeNull();
  });
  it("should output the provided message in the error paragraph", () => {
    const testErrorMessage = "Test errorrrrr";

    showError(testErrorMessage);
    const errorElement = doc.getElementById("errors");
    const errorParagrph = errorElement.firstElementChild;

    expect(errorParagrph.textContent).toBe(testErrorMessage);
  });
});
