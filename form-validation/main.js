const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const rePassword = document.querySelector('#re-password');

const form = document.querySelector('.form');

// Handle error message
const handleMessage = function(className, message) {
    const div = document.createElement('div');
    div.className = `message ${className}`;
    div.appendChild(document.createTextNode(`${message}`));
    form.insertBefore(div, username);
}
const deleteMessage = function(className){
    setTimeout(function(){
        document.querySelector(className).remove();
    }, 4000);
}


username.addEventListener('blur', validateUsername);
email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);
rePassword.addEventListener('blur', repeatedPassword);

form.addEventListener('submit', validateAll);

function validateUsername(){
    const re = /^[A-Za-z][A-Za-z0-9_]{7,29}?$/;

    if (username.value.length == 0) {
        handleMessage('invalid-input', 'Username field is required.');
        deleteMessage('.invalid-input');
    } else if (re.test(username.value) === false) {
        handleMessage('invalid-input', 'Please enter the valid Username. Username need to have atleast 7 characters, first character must be letter.');
        deleteMessage('.invalid-input');
    } else {
        handleMessage('correct-input', 'Valid.');
        deleteMessage('.correct-input');
    }
}

function validateEmail() {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  
    if (email.value.length == 0) {
        handleMessage('invalid-input', 'Email field is required.');
        deleteMessage('.invalid-input');
    } else if (re.test(email.value) === false) {
        handleMessage('invalid-input', 'Please enter the valid Email.');
        deleteMessage('.invalid-input');
    } else {
        handleMessage('correct-input', 'Valid.');
        deleteMessage('.correct-input');
    }
}

function validatePassword(){
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  
    if (password.value.length == 0) {
        handleMessage('invalid-input', 'Password field is required.');
        deleteMessage('.invalid-input');
    } else if (re.test(password.value) === false) {
        handleMessage('invalid-input', 'Please enter the valid Email. Minimum eight characters, at least one letter, one number and one special character.');
        deleteMessage('.invalid-input');
    } else {
        handleMessage('correct-input', 'Valid.');
        deleteMessage('.correct-input');
    }
}

function repeatedPassword (){
    if( rePassword.value.length == 0) {
        handleMessage('invalid-input', 'Repeat password field is required.');
        deleteMessage('.invalid-input');
    } else if(password.value !== rePassword.value) {
        handleMessage('invalid-input', 'Passwords are not matching.');
        deleteMessage('.invalid-input');
    } else {
        handleMessage('correct-input', 'Valid.');
        deleteMessage('.correct-input');
    }
}

function validateAll(e) {
    e.preventDefault();
    
    validateUsername();
    validateEmail();
    validatePassword();
    repeatedPassword();
    
    username.value = '';
    email.value = '';
    password.value = '';
    rePassword.value = '';
}