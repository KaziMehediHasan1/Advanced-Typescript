// type GenericsRelatives<T, Y, B> = [T, Y, B];
// const relativesArr: GenericsRelatives<string, number, string | boolean> = [
//   "mama",
//   80,
//   true,
// ];
// console.log(relativesArr);
var func = function (name, age, adrees) {
    if (typeof age === "string") {
        var counter = age;
        console.log(counter === null || counter === void 0 ? void 0 : counter.length);
    }
    return "".concat(name, " ").concat(age).concat(adrees);
};
var result = func("kazi", "2544444", "feni");
console.log(result);
