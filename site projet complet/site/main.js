let dark = document.querySelector("#dark");
dark.addEventListener("click", function () {
    console.log("button click");
    this.classList.toggle('dark-mode'); // Ajoute la classe "body.dark-mode"
});


//coté formulaire//
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
if(pseudo.value.length<6) {}

let password = document.querySelector('#password')
let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]"
);

if(password.value.length < 10 || passCheck.test(password.value) == false){}
