
const lowercase = new RegExp('(?=.*[a-z])')
const uppercase = new RegExp('(?=.*[A-Z])')
const number = new RegExp('(?=.*[0-9])')
const special = new RegExp('(?=.*[!@#$%^&*])')
const submit = document.getElementById('submit')
function validatePassword(){
    //The validatePassword function should check the following criteria:
    let password = document.getElementById('password').value
// The password must be at least 8 characters long.
    let p = document.getElementById('error')
    if(password.length<8){
        p.innerHTML = 'password must be at least 8 characters long.'
        submit.disabled = true
    }
// The password must contain at least one uppercase letter.
    else if(!uppercase.test(password)){
        p.innerHTML = 'password must contain at least one uppercase letter.'
        submit.disabled = true

    }
// The password must contain at least one lowercase letter.
    else if(!lowercase.test(password)){
        p.innerHTML = 'password must contain at least one lowercase letter.'
        submit.disabled = true

    }
// The password must contain at least one numeric digit.
    else if(!number.test(password)){
        p.innerHTML = 'password must contain at least one numeric digit.'
        submit.disabled = true

    }
// The password must contain at least one special character (e.g., !@#$%^&*).
    else if(!special.test(password)){
        p.innerHTML = 'password must contain at least one special character (e.g., !@#$%^&*).'
        submit.disabled = true
    }
// If the password meets all the criteria, allow the form submission.
    else{
        p.innerHTML = ''
        submit.disabled = false
    }
}