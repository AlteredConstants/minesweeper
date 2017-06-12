function matches(object, newProps) {
  if (object === newProps || object == null || newProps == null) {
    return true;
  }
  return Object.entries(newProps).reduce(
    (result, [key, value]) => result && object[key] === value,
    true,
  );
}

export function updateInObject(object, key, newProps) {
  return matches(object[key], newProps)
    ? object
    : { ...object, [key]: { ...object[key], ...newProps } };
}

export function updateInArray(array, indexes, newProps) {
  const updateIndexes = Array.isArray(indexes) ? indexes : [indexes];
  let isUpdated = false;
  const newArray = array.map((item, index) => {
    if (!updateIndexes.includes(index) || matches(array[index], newProps)) {
      return item;
    }
    isUpdated = true;
    return { ...item, ...newProps };
  });
  return isUpdated ? newArray : array;
}

export default function updateIn(...props) {
  return Array.isArray(props[0])
    ? updateInArray(...props)
    : updateInObject(...props);
}
