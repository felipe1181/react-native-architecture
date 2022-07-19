export function handlerParams(url: string, obj: object | undefined) {
  if (obj) {
    const params = Object.keys(obj).reduce((acc, key) => {
      if (acc) {
        return `${acc}&${key}=${obj[key as keyof typeof obj]}`;
      }
      return `${key}=${obj[key as keyof typeof obj]}`;
    }, '');
    return `${url}?${params}`;
  }
  return url;
}
