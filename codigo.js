let formulario = document.getElementById("myForm");
let nombre = document.getElementById("name");
let email = document.getElementById("email");
let contraseña = document.getElementById("contraseña");


formulario.addEventListener('submit', (e)=>{
e.preventDefault()

let datoForm = formulario.value

let datoNombre =   nombre.value

let datoEmail = email.value


console.log(`El nombre es: ${datoNombre} `)

})