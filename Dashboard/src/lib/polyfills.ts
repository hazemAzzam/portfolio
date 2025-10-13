// Polyfill for Object.groupBy for older Node.js versions
if (!Object.groupBy) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (Object as any).groupBy = function <T>(
    items: readonly T[],
    callbackfn: (value: T, index: number) => PropertyKey
  ): Record<PropertyKey, T[]> {
    const result: Record<PropertyKey, T[]> = {};
    for (let i = 0; i < items.length; i++) {
      const key = callbackfn(items[i], i);
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(items[i]);
    }
    return result;
  };
}
