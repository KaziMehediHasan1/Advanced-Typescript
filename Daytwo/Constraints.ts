interface KeyData {
  name: string;
  id: number;
  email: string;
}
const studenst = <T extends KeyData>(data: T) => {
  return data.email;
};

const outputConstraints = studenst({
  name: "kazi",
  id: 683304,
  email: "kazi@gmail.com",
});

// keyof
const brand = <T, X extends keyof T>(data: T, key: X) => {
  return data[key];
};
const mobile = {
  apple: "iphone",
  model: "16pro max",
  fastCharge: true,
};
const result = brand(mobile, "model");

console.log(result);
