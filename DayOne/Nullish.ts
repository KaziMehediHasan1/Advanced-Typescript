type Data = {
  firstName:string,
  lastName:string,
  family:{
    mother?:string,
    father:string,
    brother:number,
  },
  collage:string,
  passingYear:number
}

const data:Data = {
  firstName: "kazi",
  lastName: "mehedi",
  family: {
    father: "late",
    brother: 2,
  },
  collage: "hazari clg",
  passingYear: 2021,
};

const output = data?.family?.mother ?? "Ghore thake" // nullsh coalising , when data is null / undefine then we're use a value otherwise not usess
console.log(output)