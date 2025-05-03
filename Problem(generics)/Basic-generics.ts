function GenericsFunc<T>(value: T): T {
  return value;
}
interface Generic {
  name: string;
  age: number;
}
const result = GenericsFunc<Generic>({
  name: "kazi",
  age: 28,
});
const { name: userName, age } = result;
console.log(userName, age);
