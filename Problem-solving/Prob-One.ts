//Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

// solution one way
const repeatString = (str: string, num: number): string => {
  return str.repeat(num);
};

const result = repeatString("Mehedi", 3);
console.log(result)

// solution second way
const repeatStringTwo = (str: string, num: number) => {
  let result = "";
  for (let index = 0; index < num; index++) {
    result = result + str;
  }
  return result;
};

const solution = repeatStringTwo("hellow", 3);
console.log(solution)