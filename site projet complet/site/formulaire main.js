let form=document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Envoi du form detecté')
})

let email=document.querySelector('#email')
if(email.value=='') {
    console.log("invalide")
} else {
    console.log('valide')
}

if(email.value=='') {
    console.log("invalide")
} else {
    email.classList.add('success')
}

let pseudo=document.querySelector('#pseudo')
if(pseudo.value.lenght<6) {}

let passCheck=new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]"
);