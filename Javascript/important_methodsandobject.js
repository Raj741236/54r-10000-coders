//Important Objects

//Date
//23/5/2022
// const dt = new Date();

// const todayDate = dt.getDate();
// const currentYear = dt.getFullYear();

// const currentMonth = dt.getMonth();

// const completeDate = `${todayDate}/${currentMonth+1}/${currentYear}`
// console.log(completeDate);

// //Mon 23 may 8:49AM

// console.log(dt.getDay());

//Math

//max,min

// console.log(Math.min(1,4,6,3,9));

//round,ceil,floor
// console.log(Math.round(12.6));

// const randomNumber = document.getElementById('random');
// const btn = document.getElementById('btn');

// btn.addEventListener('click',function(){
//    const result = Math.random()*100000;
//    randomNumber.value = Math.round(result);
// })

//Important methods

//setTimeout method

// setTimeout(function(){
// alert('pop up')
// },5000)

//setInterval method

// setInterval(function(){
// alert('pop up')
// }, 3000);

const countDisplay = document.getElementById('count');

let count = 0;

setInterval(function(){
    if(count < 1000){
    count++;
    countDisplay.innerHTML = count;
    }
},1);