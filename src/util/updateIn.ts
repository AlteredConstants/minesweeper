function matches<T>(object: T, newProps: Partial<T>) {
  if (object === newProps || object == null || newProps == null) {
    return true;
  }
  return Object.entries(newProps).reduce(
    (result, [key, value]) => result && object[key as keyof T] === value,
    true,
  );
}

export function updateInObject<T, K extends keyof T>(
  object: T,
  key: K,
  newProps: Partial<T[K]>,
): T {
  return matches(object[key], newProps)
    ? object
    : Object.assign({}, object, {
        [key]: Object.assign({}, object[key], newProps),
      });
}

export function updateInArray<T extends ReadonlyArray<U>, U>(
  array: T,
  indexes: number | ReadonlyArray<number>,
  newProps: Partial<U>,
): T {
  const updateIndexes = Array.isArray(indexes) ? indexes : [indexes];
  let isUpdated = false;
  const newArray = array.map((item, index) => {
    if (!updateIndexes.includes(index) || matches(array[index], newProps)) {
      return item;
    }
    isUpdated = true;
    return Object.assign({}, item, newProps);
  });
  return isUpdated ? (newArray as any) : array;
}
