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
function checkEmail(input){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if(re.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid!')
    }
}

// Check password match
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2), 'Passwords were not paged'
    }
}


// Check required fields
function checkRequired(inputArr){
    inputArr.forEach(
        function(input){
            if (input.value.trim() === ''){
                console.log(input.id);
                showError(input, `${getFieldName(input)} is required`);
            } else {
                showSuccess(input);
            }
        }
    )
}

// Gets upper case to first letter of the field
function getFieldName(input){
    var firstLetter = input.id.charAt(0).toUpperCase(); // inputun id'sinin ilk harfini akır ve büyütür.
    var rest = input.id.slice(1); // inputun id'sinin ilk elemanı hariç harfleri alır getirir.
    
    return firstLetter + rest;
}

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input)
    }
}



form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 18);
    checkLength(password, 4, 21);
    checkEmail(email);
    checkPasswordMatch(password, password2);
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