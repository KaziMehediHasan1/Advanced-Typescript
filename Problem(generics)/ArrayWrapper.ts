function Wrapper<T>(value: T): T[] {
  return [value ];
}
const data = Wrapper({
  data: ["ami", "tmi", "baby"],
  ad: { google: "nai", fb: "ace" },
});

console.log(data)