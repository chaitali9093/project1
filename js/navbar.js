// document.querySelector('#toggler').addEventListener('click',function(){
//     // console.log("hello");
//     document.querySelector('#nav_link').classList.toggle('showList')
// });
// let nav_items=document.querySelector('.nav_items');

// toggler.addEventListener('click',listDisplay)

// function listDisplay(){
//     // alert()
//     nav_items.classList.toggle('showList')
// }

let fullname=document.getElementById('name');
let mail=document.getElementById('mail');
let password=document.getElementById('password')
let confirmpassword=document.getElementById('confirmpassword')

let nameError=document.getElementById('nameError');
let mailError=document.getElementById('mailError')
let passwordError=document.getElementById('passwordError')
let confirmpasswordError=document.getElementById('confirmpasswordError')

fullname.addEventListener('input',nameValidation)
mail.addEventListener('input', mailValidation)
password.addEventListener('input',passwordValidation)
confirmpassword.addEventListener('input',confirmpasswordValidation)

function nameValidation(){
    let data=fullname.value ;
    // console.log("Name:",data);
    if(data.length<1)
        {
            nameError.innerHTML="Required field"
        }
    else if(data.length<3)
        {
            nameError.innerHTML="Minimum 3 characters"
        }
    else{
            nameError.innerHTML=""
    }
}
function mailValidation(){
    let data=mail.value ;
    console.log("mail:",data);
    if(data.length<1){
        mailError.innerHTML="This field is required"
    }
    else{
        mailError.innerHTML=""
    }
       
 }

 function passwordValidation(){
    let data=password.value ;
    // console.log("password:",data);
    if(data.length<1){
        passwordError.innerHTML="This field is required"
    }
    else if(data<8){
        passwordError.innerHTML="It should be greater than eight"
    }
    else{
        passwordError.innerHTML=""
    }
 }

 function confirmpasswordValidation(){
    let data=confirmpassword.value ;
    let data1=password.value ;
    // console.log("cpassword:",data);
    // console.log("password:",data1);

    if(data.length<1){
        confirmpasswordError.innerHTML="This field is required"
    }
    else if(data==data1){
        confirmpasswordError.innerHTML="password matched"
    }
    else{
        confirmpasswordError.innerHTML="password mismatched"
    }
 }