import { cloneDeep } from './index';
import { isPlainObject } from './dataTypes';
import { Store } from './types';

function internalSetValues<T>(store: T, values: T): T {
  const newStore: T = (Array.isArray(store) ? [...store] : { ...store }) as T;

  if (!values) {
    return newStore;
  }

  Object.keys(values).forEach((key) => {
    const prevValue = (newStore as Store)[key];
    const value = (values as Store)[key];

    // If both are object (but target is not array), we use recursion to set deep value
    const recursive = isPlainObject(prevValue) && isPlainObject(value);

    (newStore as Store)[key] = recursive
      ? internalSetValues(prevValue, value || {})
      : cloneDeep(value); // Clone deep for arrays
  });

  return newStore;
}

export function setValues<T>(store: T, ...restValues: T[]): T {
  return restValues.reduce(
    (current: T, newStore: T): T => internalSetValues<T>(current, newStore),
    store,
  );
}
