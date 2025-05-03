// const func = (num1: number, num2: number): number => {
//   return num1 + num2;
// };
// const callFunc = func(3, 5);
// console.log(callFunc)
// const func2 = (num1: number, num2: string): void => {
//   console.log(num1 + num2);
// };
// func2(5,6)
// object inside function -- we're call method
var methods = {
    firstName: "Kazi",
    lastName: "Mehedi",
    ageCalc: function (prevAge, presentAge) {
        return prevAge + presentAge;
    },
};
console.log(methods.ageCalc(30, 40));
