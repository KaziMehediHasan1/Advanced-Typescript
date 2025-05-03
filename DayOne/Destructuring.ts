const data:{
  firstName:string,
  lastName:string,
  family:{
    mother:string,
    father:string,
    brother:number,
  },
  collage:string,
  passingYear:number
} = {
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


const {family:{mother,brother},collage} = data


console.log(mother,brother,collage)