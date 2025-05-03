type Assertion = (name: string | number | undefined) => string | number | undefined;

const assertion: Assertion = (name) => {
  if (typeof name === "string") {
    return `name is ${name}`;
  } else if (typeof name === "number") {
    return name; // Return the number if it's a number
  } else {
    return undefined; // Return undefined if it's undefined
  }
};

const result = assertion(4 as number); // You can also directly pass `4` as number
console.log(result); // It will log 4
