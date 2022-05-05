const student1 = null;
const student2 = "chandra";
const student3 = "hemanth";
const student4 = "meghana";
const student5 = "abhishek";
console.log(typeof student1);

const student = ["srikanth", "chandra", "hemanth", "meghana", "abhishek"];

console.log(typeof student);

console.log(student[0]);
console.log(student[1]);

const Srikanth = ["srikanth", 25, "hyderabad", ["music", "reading", "playing"]];

console.log(Srikanth);

//objects

const srikanth = {
  name: "srikanth",
  age: 25,
  place: "hyderabad",
  obbies: ["music", "reading", "playing"],
};

console.log(srikanth);

const chandra = {
  name: "chandra",
  age: 25,
  place: "hyderabad",
  obbies: ["music", "reading", "playing"],
};

console.log(srikanth);

//Arrays of Objects

const srikanth3 = [
  {
    name: "srikanth",
    age: 25,
    place: "hyderabad",
    obbies: ["music", "reading", "playing"],
  },
  {
    name: "chandra",
    age: 25,
    place: "hyderabad",
    obbies: ["music", "reading", "playing"],
  },
];

//loops

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

/*
 1. for loop
 2. while loop
 3. do-while loop
4. for-in loop
5. for-of loop

*/

//for loop
//when you know the initialization part you can go for for-loop

for(let i = 1; i <= 10; i++){
   // debugger;
    console.log(i);
}

//while loop
//when you don't know from where to start.It executes block of code as long as specified condition is true

let someNumber = 10;

while(false){
    //debugger;
    console.log(someNumber);
    someNumber++;
}

//do-while loop
//if you want to execute your code atleast once if the condition is false

do{
    console.log(someNumber);
}while(false)


//Entry controlled loop(for,while)
//Exit controlled loop(do-while)
