const grandParent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


grandParent.addEventListener("click",function(){
    console.log('grandparent called');
})


parent.addEventListener("click",function(e){
    
    console.log('parent called');
    e.stopPropagation();

})


child.addEventListener("click",function(e){
    console.log('child called');
    e.stopPropagation();
})


document.addEventListener('click',function(){
    console.log('document called')
})
