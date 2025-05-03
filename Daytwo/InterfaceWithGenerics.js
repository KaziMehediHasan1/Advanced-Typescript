var family1 = {
    name: "kazi",
    age: 40,
    phone: 4493449509249,
    address: {
        parmanent: "feni",
        present: "dhaka",
    },
};
var family = function (name, age, phone, address) {
    return "Name is ".concat(name, " her age ").concat(age, " and number ").concat(phone, " and address ").concat(address === null || address === void 0 ? void 0 : address.present);
};
var reulst = family("kazi", 33, 524582994, {
    parmanent: "feni",
    present: "dahak",
});
console.log(reulst);
