function GenericsFunc<T>(value: T): T {
  return value;
}

const result = GenericsFunc({name:"kazi",age:"28"})