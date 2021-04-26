export function formatDate(
  date: string | number | Date,
  timeZone?: string
): string {
  return new Intl.DateTimeFormat("default", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone,
  }).format(new Date(date));
}

export function getLocalTimeZone(): string {
  const dtf = new Intl.DateTimeFormat();

  return dtf.resolvedOptions().timeZone;
}
