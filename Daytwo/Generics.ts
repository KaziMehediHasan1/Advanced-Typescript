// type GenericsRelatives<T, Y, B> = [T, Y, B];
// const relativesArr: GenericsRelatives<string, number, string | boolean> = [
//   "mama",
//   80,
//   true,
// ];
// console.log(relativesArr);

type GenericsFunc<N, A, T> = (name: N, age: A, adrees: T) => string | undefined;

const func: GenericsFunc<string, string, string> = (name, age, adrees) => {
  if(typeof age === "string"){
    const counter = age as string;
    console.log(counter?.length)
  }
  return `${name} ${age}${adrees}`;
};
const result = func("kazi", "2544444", "feni");
console.log(result)
