const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

"use strict";
// Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.classList.add("error");
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.classList.add('success');
}

// Check valid Email
function checkEmail(email){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

// Check required fields
function checkRequired(inputArr){
    inputArr.forEach(
        function(input){
            if (input.value.trim() === ''){
                showError(input, `${getFieldName(input)} is required`);
            }
        }
    )
}



form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, email, password, password2]);
})



/**********************************************************************************************************************/

// //! Event Listener Before Refactoring
// form.addEventListener('submit', function(e){
// e.preventDefault();
//     if(username.value === ''){
//         showError(username, 'Enter a username');
//     } else {
//         showSuccess(username);
//     }

//     if(email.value === ''){
//         showError(email, 'Enter a Email');
//     } else if(!checkEmail(email.value)) {
//         showError(email, 'Enter a valid Email')
//     }
//     else {
//         showSuccess(email);
//     }

//     if(password.value === ''){
//         showError(password, 'Enter a password');
//     } else {
//         showSuccess(password);
//     }

//     if(password2.value === ''){
//         showError(password2, 'Enter a password');
//     } else {
//         showSuccess(password2);
//     }
// });