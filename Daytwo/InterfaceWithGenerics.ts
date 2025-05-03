interface GenericsObj<T> {
  name: string;
  age: number;
  phone: number;
  address: T;
}

const family1: GenericsObj<{
  parmanent: "feni";
  present: string;
}> = {
  name: "kazi",
  age: 40,
  phone: 4493449509249,
  address: {
    parmanent: "feni",
    present: "dhaka",
  },
};

