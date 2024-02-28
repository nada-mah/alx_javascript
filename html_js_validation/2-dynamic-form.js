let number = 1
const inputContainer = document.getElementById('inputContainer');
const form = document.getElementById('dynamicForm')
let para =document.createElement('p');
para.innerHTML = 'Please fill in all fields';
para.style.color = 'red'

function getselectedvalue(){
    number = document.getElementById('numFields').value
    generateInputFields(number)
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateInputFields(number){
    removeAllChildNodes(inputContainer)
    for(i=1;i<=number;i++){
        const text = document.createElement('input');
        text.type = "text";
        text.id = `field${i}`;
        text.name =`field${i}`;
        text.placeholder = `Feild${i}`
        inputContainer.appendChild(text);
    } 
    console.log('number :>> ', number);
}

function validateForm(){
    let fields = inputContainer.children
    if(fields.length == 0){
        form.appendChild(para)
        return false
    }
    for(i=0;i<fields.length;i++){
        if(!fields[i].value){
            form.appendChild(para);
            return false

        }
    }
    
}