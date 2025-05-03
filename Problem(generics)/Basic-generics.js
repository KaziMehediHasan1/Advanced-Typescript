function GenericsFunc(value) {
    return value;
}
var result = GenericsFunc({
    name: "kazi",
    age: 28,
});
var userName = result.name, age = result.age;
console.log(userName, age);
