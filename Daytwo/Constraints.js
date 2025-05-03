var studenst = function (data) {
    return data.email;
};
var outputConstraints = studenst({
    name: "kazi",
    id: 683304,
    email: "kazi@gmail.com",
});
// keyof
var brand = function (data, key) {
    return data[key];
};
var mobile = {
    apple: "iphone",
    model: "16pro max",
    fastCharge: true,
};
var result = brand(mobile, "model");
console.log(result);
