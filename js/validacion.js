const formulario = document.getElementById("miFormulario");
console.log(formulario);


formulario.addEventListener("submit", event => {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const numero = document.getElementById("numero").value.trim();


    const errorNombre = document.getElementById("errorNombre"); 
    const errorEmail = document.getElementById("errorEmail");
    const errorMensaje = document.getElementById("errorMensaje");
    const errorNumero = document.getElementById("errorNumero");


    let formularioValido = true;


    // validar nombre
    if (nombre == '') {
        // alert ("el nombre debe estar completo")
        errorNombre.classList.remove("textoErrorMostrar");
        formularioValido = false;
    
    } else {
        errorNombre.classList.add('textoErrorMostrar');
    }

    // validar email
    // expresiones regulares
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        errorEmail.classList.remove("textoErrorMostrar");
        formularioValido = false;
    } else {
        errorEmail.classList.add("textoErrorMostrar");
    }

    // Validar Numero
    if (numero == ''){
        errorNumero.classList.remove("textoErrorMostrar");
        formularioValido = false;
    } else {
        errorNumero.classList.add("textoErrorMostrar");
    }
    
    // Validar mensaje
    if (mensaje.length < 10){
        errorMensaje.classList.remove("textoErrorMostrar");
        formularioValido = false;
    } else {
        errorMensaje.classList.add("textoErrorMostrar");
    }

    // si el formulario es valido, se puede enviar
    if(formularioValido){
        alert("Formulario enviado correctamente.");

        const formulariocontacto = {
            nombre: nombre,
            email: email,
            mensaje: mensaje
        };
    }
}
)