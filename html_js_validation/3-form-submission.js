    const form = document.getElementById('submitForm')
    let para =document.createElement('p');
    

    function handleFormSubmit(){
        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        if(!name || !email){
            event.preventDefault()
            para.innerHTML = 'Please fill in all required fields';
            para.style.color = 'red'
            form.appendChild(para)
            alert('Please fill in all required fields')
        }
        else{
            alert('Form submitted successfully!')
        }
    }



    form.addEventListener('submit', handleFormSubmit);