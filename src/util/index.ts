import { Store } from './types';

const cloneObjectDeep = (val: any) => {
  if (Object.getPrototypeOf(val) === Object.prototype) {
    const res: Store = {};
    for (const key in val) {
      res[key] = cloneDeep(val[key]);
    }
    return res;
  }
  return val;
};

const cloneArrayDeep = (array: Array<any>) => {
  return array.map((item) => item);
};

export const cloneDeep = (val: any) => {
  if (Array.isArray(val)) {
    return cloneArrayDeep(val as Array<any>);
  } else if (typeof val === 'object' && val !== null) {
    return cloneObjectDeep(val);
  }
  return val;
};
