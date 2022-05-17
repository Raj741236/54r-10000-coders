//Form Valiadtions

// const validateForm = function(e){
// e.preventDefault();
// let userName = document.getElementById('username').value;
// let email = document.getElementById('email').value;
//     if(userName == ''){
//         document.getElementById('nameerr').innerHTML = "Username should not be empty";
//         document.getElementById('nameerr').style.color = "red";
//         document.getElementById('username').style.border = "1px solid red";
//     }else if(email == ''){
//         document.getElementById('emailerr').innerHTML = "Email should not be empty";
//         document.getElementById('emailerr').style.color = "red";
//         document.getElementById('email').style.border = "1px solid red";
//     }else{
//         document.getElementById('username').style.border = "1px solid green";
//         document.getElementById('nameerr').style.display = 'none';
//         document.getElementById('email').style.border = "1px solid green";
//         document.getElementById('emailerr').style.display = 'none';
//     }
// }


// document.getElementById('form1').addEventListener('submit',validateForm)


//Field validations

const ValidateInput = function(e){
    if(e.target.id == 'username'){
   if(e.target.value == ''){
       document.getElementById('nameerr').innerHTML = "Please enter a valid username";
       document.getElementById('nameerr').style.color = "red"
       e.target.style.border = "1px solid red";
   }else{
    document.getElementById('nameerr').style.display = 'none';
    e.target.style.border = "1px solid green"
   }
}
if(e.target.id == 'email'){
    if(e.target.value == ''){
        document.getElementById('emailerr').innerHTML = "Please enter a valid Email address";
        document.getElementById('emailerr').style.color = "red"
        e.target.style.border = "1px solid red";
    }else{
     document.getElementById('emailerr').style.display = 'none';
     e.target.style.border = "1px solid green"
    }
 }
}

document.getElementById('username').addEventListener('blur',ValidateInput);
document.getElementById('email').addEventListener('blur',ValidateInput);