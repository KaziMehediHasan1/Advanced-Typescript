//define a type
type Data = {
  firstName: string;
  lastName: string;
  family: {
    mother: string;
    father: string;
    brother: number;
  };
  collage: string;
  passingYear: number;
};

const data: Data = {
  firstName: "kazi",
  lastName: "mehedi",
  family: {
    mother: "housewife",
    father: "late",
    brother: 2,
  },
  collage: "hazari clg",
  passingYear: 2021,
};

// for function
type AddSum =(num1:number,num2:number) => number
const add:AddSum = (num1, num2) => console.log(num1 + num2);
add(2, 4);
