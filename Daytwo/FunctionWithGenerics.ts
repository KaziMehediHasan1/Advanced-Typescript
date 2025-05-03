// type GenericsFunc1<T> = (address: T) => string;
// type AddreeType = {
//   present: "dahak";
//   parmanent: string;
// };
// type GenericsFunc = <T extends AddreeType>(
//   name: string,
//   age: number,
//   phone: number,
//   address: T
// ) => string;

// const family: GenericsFunc = (name, age, phone, address) => {
//   return `Name is ${name} her age ${age} and number ${phone} and address ${address?.present}`;
// };

// const reulst = family("kazi", 33, 524582994, {
//   parmanent: "feni",
//   present: "dahak",
// });

// console.log(reulst)

const versity = <T>(parameter: T) => {
  return parameter;
};

const reulst1 = versity({
  name: "kazi",
  age: 25,
  phone: 4324324,
  address: {
    present: "dhaka",
    parmanent: "feni",
  },
});

console.log(reulst1.address.parmanent);
