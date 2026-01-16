import { isValidEmail } from "./emailValidator";

describe("isValidEmail", () => {
  test("valid: simple email", () => {
    expect(isValidEmail("a@b.com")).toBe(true);
  });

  test("invalid: missing @", () => {
    expect(isValidEmail("abc.com")).toBe(false);
  });

  test("invalid: contains spaces", () => {
    expect(isValidEmail("a @b.com")).toBe(false);
    expect(isValidEmail("a@b .com")).toBe(false);
    expect(isValidEmail("a@b.com ")).toBe(false);
  });

  test("invalid: missing local part (nothing before @)", () => {
    expect(isValidEmail("@b.com")).toBe(false);
  });

  test("invalid: missing domain part (nothing after @)", () => {
    expect(isValidEmail("a@")).toBe(false);
  });

  test("invalid: domain has no dot", () => {
    expect(isValidEmail("a@bcom")).toBe(false);
  });

  test("invalid: dot is the last character", () => {
    expect(isValidEmail("a@b.")).toBe(false);
  });

  test("invalid: domain starts with a dot", () => {
    expect(isValidEmail("a@.com")).toBe(false);
  });

  test("invalid: multiple @ characters", () => {
    expect(isValidEmail("a@@b.com")).toBe(false);
  });

  test("valid: subdomain", () => {
    expect(isValidEmail("user@mail.domain.com")).toBe(true);
  });
});
