//function declaration
// greetTheUser1();
// function greetTheUser1(){
//     console.log("Welcome User");
// }


//Anonymous Function : function without a name

//Function with no parameters;

//Function with parameters:

// function greetTheUser(name){
//     console.log("Welcome " + name);
// }
// greetTheUser("ram");

//function with default parameters
// function greetTheUser(name="alex"){
//     console.log("Welcome " + name);
// }
// greetTheUser("ram");
// greetTheUser("Shayam");
// greetTheUser();

//function expression or variable function
// greetTheUser();
// const greetTheUser = function(){
//     console.log("welcome user");
// }
// console.log(greetTheUser);

//Self Execution function

// (function(){
//     alert("Self Execution function");
// })();

// function with return statement

// function gstCalculation(amount,gst){
//   const result = amount + ((amount/100)*gst);
 
//   return "the total amount is: " + result;
 
// }
// const totalAmount = gstCalculation(10000,18);
// console.log(totalAmount);

//Recursive function

// function greetTheUser(count){
//     let num = count -1;
//     if(num >=0){
//         console.log("Welcome user" + num);
//         greetTheUser(num);
//     }
// }

// greetTheUser(3);

//Call back function: A function which is passed as an argument to another function.

// function x(callback){
//     console.log(callback);
//     callback();
// }

// function y(){
// console.log("welcome user")
// }
// x(y);

//Nested function

function outer(){
    function inner(){
        console.log("welcome user");
    }
    inner();
}
outer();






