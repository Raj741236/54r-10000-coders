//Arrow functions

// const add = function(a){
//     return a +100
// }

// console.log(add(20));

// //Arrow functions

// const add1 = () => {
//     let a = 100;
//     let b = 200;
//     return a+b+100;
// }

// console.log(add1());

//Higher order functions
//A function which takes another function as an argument or returns a 
//function from it.
//forEach,map,filter,reduce

// function x(){
//     console.log('Higer order function');
// }

// function y(x){
//    x();
// }

// y(x);

// const arr =[2,6,3,5,1,8];

// for(let i = 0; i<arr.length;i++){
//     console.log(arr[i]*2);
// }

// const forEachResult = arr.forEach((num)=>{
//     console.log(num * 2);
//     return num*2;

// })
// console.log(forEachResult);

// const mapResult = arr.map((num)=>{
//     console.log(num * 2);
//     return num*2;
// })

// console.log(mapResult)

//filter method

// const arr =[3,7,1,6,4,5];

// const result = arr.filter(function(num){
//     return num%2==0;
// })
// console.log(result);

//reduce method

//syntax: arr.reduce(callbackfunc,initial value);

// const arr = [2,5,7,2,1];
// let sum = 0;


// function findSum(){
    
//     for(let i =0;i<arr.length;i++){
//         sum = sum+arr[i];
//     }
//     return sum;
// }
// findSum();
// console.log(sum)


// const result = arr.reduce((accumulator,arrvalue)=>{
//    return accumulator + arrvalue;
// },0)
// console.log(result)



