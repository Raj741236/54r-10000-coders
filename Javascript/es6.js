//for -in loop and for of loop

// const arr = ["Youtube","Facebook","Instagram","Amazon"];
// console.log(arr);

// const obj = {
//     a:1,
//     b:2
// }

// for(const ele in obj){
//     console.log(obj[ele])
// }

// for(const ele of arr){
//     console.log(ele)
// }

//Destructuring in javascript

// const arr=["Infosys","Wipro","Accenture"];

// const mnc1= arr[0];
// console.log(mnc1)

// const mnc2= arr[1];
// console.log(mnc2)
// const mnc3= arr[2];
// console.log(mnc3);

// const [mnc1,mnc2,mnc3]=arr;

// console.log(mnc1)
// console.log(mnc2)
// console.log(mnc3)

// const user = {
// name :"Rajashekar",
// age :26,
// place : "Bangalore",
// obbies:{
//     book : "Mahabharatam",
//     sports : "cricket"
// }
// }
// const name = user.name;
// console.log(name);
// const age = user.age;
// console.log(age);
// const place = user.place;
// console.log(place);
//nested object destructuring
// const {name,age,place,obbies:{book,sports}}= user;

// console.log(name);
// console.log(age);
// console.log(place);
// console.log(book);
// console.log(sports);

//Rest and Spread Operator(...)

// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8];

// const combinedArray = [...arr1,...arr2];

// console.log(combinedArray)

// function sum(...args){
// // console.log(arguments);
// // let args = Array.from(arguments);
// console.log(args.reduce((acc,val)=>{
//     return acc+val;
// }))
// }
// const arr2 = [2,5,3,4,5,1]
// const arr1=[2,4,6,5];
// sum(...arr1);
// sum(...arr2);


//optional chaining

// const employee={
//     designation : "software engineer",
//     name : {
//         firstName : "Rajashekar",
//         lastName : "A S"
//     },
//     experience:{
    
//         days : 2
//     },
//     skills:["HTML","CSS","JavaScript","React"]
// }

// const experience1 = `${(employee?.experience?.years)=== undefined ? 0 :employee?.experience?.years}years ${(employee?.experience?.months) === undefined ? 0 :employee?.experience?.months}months ${(employee?.experience?.days)=== undefined ? 0 :employee?.experience?.days}days `;
// console.log(experience1)

// let experience = '';

// if(employee.experience ){
//     if(employee.experience.years !== undefined){
//         experience += `${employee.experience.years}years`;
//     }else{
//         experience += `${0}years`;
//     }
//     if(employee.experience.months !== undefined){
//         experience += `${employee.experience.months}months`;
//      }else{
//         experience += `${0}months`;
//      }
//      if(employee.experience.days !== undefined){
//         experience += `${employee.experience.days}days`;
//      }else{
//         experience += `${0}days`;
//      }
  
// }
// console.log(experience);
