export const isString = (val: any) => Object.prototype.toString.call(val) == '[object String]';
export const isNumber = (val: any) => Object.prototype.toString.call(val) == '[object Number]';
export const isBoolean = (val: any) => Object.prototype.toString.call(val) == '[object Boolean]';
export const isNull = (val: any) => Object.prototype.toString.call(val) == '[object Null]';
export const isUndefined = (val: any) =>
  Object.prototype.toString.call(val) == '[object Undefined]';
export const isSymbol = (val: any) => Object.prototype.toString.call(val) == '[object Symbol]';
export const isPlainObject = (val: any) => Object.prototype.toString.call(val) == '[object Object]';
export const isArray = (val: any) => Object.prototype.toString.call(val) == '[object Array]';
export const isMap = (val: any) => Object.prototype.toString.call(val) == '[object Map]';
export const isSet = (val: any) => Object.prototype.toString.call(val) == '[object Set]';
export const isDate = (val: any) => Object.prototype.toString.call(val) == '[object Date]';
export const isRegExp = (val: any) => Object.prototype.toString.call(val) == '[object RegExp]';
export const isFunction = (val: any) => Object.prototype.toString.call(val) == '[object Function]';
export const isGenerator = (val: any) =>
  Object.prototype.toString.call(val) == '[object GeneratorFunction]';
export const isPromise = (val: any) => Object.prototype.toString.call(val) == '[object Promise]';
export const isWeakMap = (val: any) => Object.prototype.toString.call(val) == '[object WeakMap]';
