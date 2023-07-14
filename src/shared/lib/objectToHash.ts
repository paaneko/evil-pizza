export function objectToHash<T>(object: T): string {
  const jsonString = JSON.stringify(object);
  let hash = 0;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < jsonString.length; i++) {
    const char = jsonString.charCodeAt(i);
    hash = (hash * 31 + char) % 2 ** 32;
  }

  return hash.toString(16);
}
