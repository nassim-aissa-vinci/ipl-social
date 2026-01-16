export function isValidEmail(email: string): boolean {
  // c) no spaces
  if (email.includes(" ")) return false;

  // a) at least one '@' (exactly one)
  const atIndex = email.indexOf("@");
  if (atIndex === -1) return false;
  if (email.indexOf("@", atIndex + 1) !== -1) return false;

  // d) text before and after '@'
  const localPart = email.slice(0, atIndex);
  const domainPart = email.slice(atIndex + 1);
  if (localPart.length === 0) return false;
  if (domainPart.length === 0) return false;

  // b) at least one dot in the domain, not as the last char,
  // and not as the first char of the domain (e.g. a@.com)
  const dotIndex = domainPart.indexOf(".");
  if (dotIndex === -1) return false;
  if (dotIndex === 0) return false;
  if (domainPart.endsWith(".")) return false;

  return true;
}
