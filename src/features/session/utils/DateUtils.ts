export function getCurrentDate(): Date {
  return new Date();

  
}
export function getDatePlusDays(n: number): Date {
  const result = new Date();
  result.setDate(result.getDate() + n);
  return result;
}

export function parseLocalDate(iso: string): Date {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}
