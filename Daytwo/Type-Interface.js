var relativesFunc = function (fufu, age, address) {
    if (typeof age === "number") {
        var count = void 0;
        count = age.toString().length;
        console.log(count);
    }
    return "my fufu ".concat(fufu, " her age is ").concat(age, " and home is ").concat(address);
};
var result = relativesFunc("shilpi", 40000, "feni");
console.log(result);
