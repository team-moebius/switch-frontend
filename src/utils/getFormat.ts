export function getFormat(uri: string) {
  const format = uri.match(/\.\w+$/);
  const modifiedFormat = format ? format[0].substring(1) : '';

  return modifiedFormat;
}
