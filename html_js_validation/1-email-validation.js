const para = document.getElementById('error')
const submit = document.getElementsByTagName('button')[0]

function validateEmail(){
    let email = document.getElementById('email').value
//The validateEmail function should check if the email follows the standard email format, which typically 
// includes an alphanumeric username, followed by the @ symbol, and then the domain name.
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        para.innerHTML ='Please enter a valid email address'
        return false;
    }
//If the email format is correct, allow the form submission.

//If the email format is incorrect, display the error message “Please enter a valid email address.” in the
    return true;
//element with the id "error".
}
