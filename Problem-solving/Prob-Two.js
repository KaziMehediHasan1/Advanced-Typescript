// Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.
// solution one
// const findLargestNumber = (arr: number[]):number => {
//   const large = Math.max(...arr);
//   return large;
// };
// const result = findLargestNumber([3, 10, 5, 12, 40, 70]);
// console.log(result);
const findLargestNumber = (arr) => {
    arr.reduce((prev, current, index, array) => {
        const data = prev + current;
        return data;
    }, 0);
};
const data = findLargestNumber([3, 10, 5, 12, 40, 70]);
console.log(data, "dataaaaa");
