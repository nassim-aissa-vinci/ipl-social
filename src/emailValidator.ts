export function isValidEmail(email: string): boolean {
  // c) aucun espace
  if (email.includes(" ")) return false;

  // a) au moins un @ (et on force exactement un)
  const atIndex = email.indexOf("@");
  if (atIndex === -1) return false;
  if (email.indexOf("@", atIndex + 1) !== -1) return false;

  // d) texte avant et après @
  const localPart = email.slice(0, atIndex);
  const domainPart = email.slice(atIndex + 1);
  if (localPart.length === 0) return false;
  if (domainPart.length === 0) return false;

  // b) au moins un point dans le domaine, pas en dernier caractère
  // et pas en premier caractère du domaine (ex: a@.com)
  const dotIndex = domainPart.indexOf(".");
  if (dotIndex === -1) return false;
  if (dotIndex === 0) return false;
  if (domainPart.endsWith(".")) return false;

  return true;
}
