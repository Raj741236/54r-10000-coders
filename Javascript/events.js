// const btn = document.querySelector('.btn');
//1st Approach

// function handleClick(){
//     document.querySelector('p').style.backgroundColor = 'red'
// }

//2nd Approach

// const btn = document.querySelector('.btn');
// btn.onclick = handleClick;


// function handleClick(){
//     document.querySelector('p').style.backgroundColor = 'red'
// }

//#3rd Approach//best approach

// const btn = document.querySelector('.btn');

// btn.addEventListener('click',function(e){
//     console.log(e);
//     document.querySelector('p').style.backgroundColor = 'red'
// });


//DBL click
// const btn = document.querySelector('.btn');
// btn.addEventListener('dblclick',function(){
//     document.querySelector('p').style.backgroundColor = 'red'
// });

//mouseover and mouseleave
// const para = document.querySelector('p')

// para.addEventListener('mouseover',function(){
//    para.style.backgroundColor = 'red';
// })

// para.addEventListener('mouseleave',function(){
//     para.style.backgroundColor = 'green';
// })


//context menu

// const rightClick = document.querySelector('h1');

// rightClick.addEventListener('contextmenu',function(){
//     console.log('right click')
// })

//Keyboard Events

// document.addEventListener('keydown',function(event){
//      console.log(event)
//      console.log(event.key)
// })

//Form Events

// const input = document.querySelector('input');

// input.addEventListener('focus',function(){
//     input.style.outline = "2px solid red";
// })

// input.addEventListener('blur',function(){
//     input.style.outline = "2px solid green";
// })

// input.addEventListener('change',function(e){
//     console.log(e.target.value);
// })

//page Events : scroll,resize
// const box = document.querySelector('.box');
// const boxClasses = document.querySelector('.box').classList;

// function toggleColor(){
//     if(boxClasses.contains('box-primary-color')){
//         boxClasses.remove('box-primary-color');
//         boxClasses.add('box-secondary-color');
//     }else{
//         boxClasses.remove('box-secondary-color');
//         boxClasses.add('box-primary-color');
//     }
// }

// document.addEventListener('scroll',toggleColor);


// window.addEventListener('resize',function(e){
//     console.log(window.innerHeight);
//     console.log(window.innerWidth);
//     if(window.innerWidth<800){
//         document.body.style.backgroundColor = 'yellow';
//     }else{
//         document.body.style.backgroundColor = 'red';
//     }
// })