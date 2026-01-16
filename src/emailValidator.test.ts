import { isValidEmail } from "./emailValidator";

describe("isValidEmail", () => {
  test("valide: email simple", () => {
    expect(isValidEmail("a@b.com")).toBe(true);
  });

  test("invalide: pas de @", () => {
    expect(isValidEmail("abc.com")).toBe(false);
  });

  test("invalide: espace", () => {
    expect(isValidEmail("a @b.com")).toBe(false);
    expect(isValidEmail("a@b .com")).toBe(false);
    expect(isValidEmail("a@b.com ")).toBe(false);
  });

  test("invalide: rien avant @", () => {
    expect(isValidEmail("@b.com")).toBe(false);
  });

  test("invalide: rien après @", () => {
    expect(isValidEmail("a@")).toBe(false);
  });

  test("invalide: domaine sans point", () => {
    expect(isValidEmail("a@bcom")).toBe(false);
  });

  test("invalide: point en dernier caractère", () => {
    expect(isValidEmail("a@b.")).toBe(false);
  });

  test("invalide: domaine commence par un point", () => {
    expect(isValidEmail("a@.com")).toBe(false);
  });

  test("invalide: plusieurs @", () => {
    expect(isValidEmail("a@@b.com")).toBe(false);
  });

  test("valide: sous-domaine", () => {
    expect(isValidEmail("user@mail.domain.com")).toBe(true);
  });
});
