//Object Oriented JavaScript

//What are objects in Javascript?
//Objects are another data type which is used to store information in key:value pair.

//How to create Object?
//1. Literal way

// let product = {
//   name: "Iphone",
//   model: 13,
//   description:
//     "The iPhone 13 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone",
//   price: 100000,
// };
// //How to retrive an object

// //1. Dot Notation
// console.log(product.price);

// //2.Square bracket notation
// console.log(product["price"]);

// //Constructor way

// const demo = function () {
//   console.log(this);
// };
// demo();

// function Cart() {
//   this.items = [
//     {
//       name: "Iphone",
//       model: 13,
//       description:
//         "The iPhone 13 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone",
//       price: 100000,
//     },
//     {
//       name: "Iphone",
//       model: 13,
//       description:
//         "The iPhone 13 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone",
//       price: 100000,
//     },
//     {
//       name: "Iphone",
//       model: 13,
//       description:
//         "The iPhone 13 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone",
//       price: 100000,
//     },
//   ];
// }
// let cObj = new Cart();
// console.log(cObj.items)

//What are predefined objects and userdefined objects

//document-literal
//event-literal
//window-literal
//Math-literal
//Date-constructor
//Promise-constructor
//Array-constructor

//How to add behaviour to the data that is present within object?



let product = {
    name: "Iphone",
    model: 13,
    description:
      "The iPhone 13 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone",
    price: 100000,
    details:function(){
        return `<h1>${this.name} ${this.model}</h1>
                <p>${this.description}</p>
                <button>Add to Cart</button
        `
    },
    gstCalc  : function(gstPercent){
        return this.price+((this.price * gstPercent)/ 100)
    }
  };
// console.log(description)
  const result = product.details();

document.body.innerHTML = result

  console.log(product.details())
  console.log(product.gstCalc(10));


  //POP vs OOP

  //POP is entirely dependent on function to do some specific task.


  //Object oriented principles
  //1. Data encapsulation
  //wrapping the data and member functions into a single unit
//2.Data Abstraction:
// Hiding information from the outer world

//polymorphism
console.log(20 + 30);

console.log('20' + 30);