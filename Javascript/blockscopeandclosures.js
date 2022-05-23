
// var a =10;
// let b = 20;
// const c =30;

// {
//     var a = 100;
//     let b = 200;
//     const c = 300;
//     console.log(a);
//     console.log(b);
//     console.log(c);


// }

// console.log(a);
// console.log(b);
// console.log(c);

//closures

function outer(){
    var a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}
const result = outer();

console.log(result);

result();
