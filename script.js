const form = document.getElementById('form');
const Username = document.getElementById('username');
const surname = document.getElementById('surname');
const address = document.getElementById('address');
const matNumber = document.getElementById('matNumber');
const email= document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input){
    const formControl = 'form-control success';
}

//Check email is valid
function isValidEmail(email){
  var re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(input.value.trim())){
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}



// check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if (input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}


// Check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `$(getFieldName(input)} must be at least ${min} characters`);

    }else if (input.value.length > max) {
        showError(
            input,
            `$(getFieldName(input)} must be less than ${max} characters`

        );
    } else {
        showSuccess(input)
    }
    }

// check password match
function checkPasswordsMatch(input1, input2){
if(input1.value !== input2.value ){
    showError(input2, 'passwords do not match');

}
}

// Get fieldName
function checkRequired(inputArr){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, surname, address, matNumber, email, password, password2]);
    checkLength(username, 6, 18);
    checkLength(password, 5, 12)
    checkEmail(email)
     checkPasswordsMatch(password, password2);

    });
