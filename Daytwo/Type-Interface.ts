type relatives1 = (fufu: string, age: number, address: string) => string;
const relativesFunc: relatives1 = (fufu, age, address) => {
  if (typeof age === "number") {
    let count: number | undefined;
    count = age.toString().length 
    console.log(count); 
  }
  return `my fufu ${fufu} her age is ${age} and home is ${address}`;
};
const result = relativesFunc("shilpi", 40000, "feni");
console.log(result);
