function Wrapper(value) {
    return [value.data];
}
var data = Wrapper({
    data: ["ami", "tmi", "baby"],
    ad: { google: "nai", fb: "ace" },
});
console.log(data);
