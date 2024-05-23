

function validarContacto() {
    //validacion de nombre
    let nombre = document.querySelector('#nombre').value
    const soloPalabras = /^[a-z\s]+$/i;
    
    if(soloPalabras.test(nombre)){
        NOMBRE_VALIDO = true;
    } else {
        NOMBRE_VALIDO = false;
    }

    //validacion de correo    
    let email = document.querySelector('#email').value;
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(emailRegExp.test(email)){
        EMAIL_VALIDO = true
    } else {
        EMAIL_VALIDO = false
    }

    if(EMAIL_VALIDO && NOMBRE_VALIDO) {
        alert("datos enviados correctamente");
    } 

    
}

const formulario = document.querySelector('#formContacto');

formulario.addEventListener('submit', evento => {
    validarContacto();
    //evento.preventDefault();
})

/*
let edad = document.querySelector('#edad').value;

if (edad === '' || !Number.isInteger(Number(edad))) { 
    EDAD_VALIDO = false;
} else {
    EDAD_VALIDO = true;
}*/