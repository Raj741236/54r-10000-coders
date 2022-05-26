//AJAX(Aysnchronous Javascript and XML/JSON)
//It is used to create fast and dynamic webpages without reloading the entire webpage

//HTTP Methods
//GET-(to get the data)
//post - to send the data
//put- to update the data
// Delete- to delete the data.

//Status code
//200+:Success
//300+-redirection.
//400+-client side error.
//500+ -server side error.

// const xhr = new XMLHttpRequest();
// console.log(xhr);

// //open a request
// xhr.open('GET',"https://fakestoreapi.com/products",true);

// xhr.onload = function(){
//     if(xhr.status == 200){
//         console.log(xhr.responseText)
//     }
// }
// //send the request

// xhr.send();

//Promises
//It is an object that may produce a single value somtime in a future

//Screnarios
// 1. pending
// 2. fulfilled
// 3. rejected
// let partyPromise = false;

// let giveParty = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         if(partyPromise){
//             resolve('Chandra has given a party');
//         }else{
//             reject('chandra has not kept his promise')
//         }
//     },5000)
// })
// console.log(giveParty);

//then()method:when the promise is fullfilled
//.catch()method:when the promise is rejected
//.finally()method:it will work both on fullfilled and rejected state.

// function makePromise(partyPromise){
//   return new Promise(function(res,rej){
//       setTimeout(()=>{
//           if(partyPromise){
//               res('Chandra has kept his promise')
//           }else{
//               rej('chandra has not kept his promise')
//           }
//       },5000)
//   })
// }

// let partyPromise = makePromise(false);

// partyPromise.then((suceess)=>console.log(suceess))
//             .catch((reason)=>console.log(reason))
//             .finally(()=>console.log('Friends are ready for the party'))

//fetch method:It is a browser method which is used to make a network call
//Return type promise object

// let response = fetch('https://fakestoreapi.com/products');

// console.log(response);
// response.then(function(res){
// res.json().then(function(data){
//     console.log(data);
// })
// }).catch(function(rej){
//     console.log(rej)
// })

//Async await (ES7)
//Async = it will convert the code to asynchronous
//await = It will wait till the data comes

// const getData = async function(){
// const response =await fetch('https://fakestoreapi.com/products');
// const data = await response.json();
// console.log(data)
// }

// getData();