var assertion = function (name) {
    if (typeof name === "string") {
        return "name is ".concat(name);
    }
    else if (typeof name === "number") {
        return name; // Return the number if it's a number
    }
    else {
        return undefined; // Return undefined if it's undefined
    }
};
var result = assertion(4); // You can also directly pass `4` as number
console.log(result); // It will log 4
