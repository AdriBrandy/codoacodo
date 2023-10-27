(function(){
                    
    var formulario = document.getElementsByName('formulario')[0]
    console.log (formulario)
    elementos = formulario.elements,
    boton = document.getElementById('btn');
    
    var validar_nombre = function(e) {
        if (formulario.nombre.value == 0){
            alert ("Ingresa tu nombre para continuar");
            e.preventDefault();
        } 
    }
    
    var validar_apellido = function(e) {
        if (formulario.apellido.value == 0){
            alert ("Ingresa tu apellido para continuar");
            e.preventDefault();
        } 
    }

    var validar_email = function(e) {
        if (formulario.email.value == 0){
            alert ("Ingresa tu email para continuar");
            e.preventDefault();
        } 
    }

    var validar_mensaje = function(e) {
        if (formulario.mensaje.value == 0){
            alert ("Por favor ingresa un mensaje para que podamos asistirte");
            e.preventDefault();
        } 
    }

    var validar_edad = function(e){
        if (formulario.edad.checked == false){
            alert ("Confirma que eres mayor de edad para continuar")
            e.preventDefault();
        } 
    }

    var validar = function (e){
        validar_nombre(e);
        validar_apellido(e);
        validar_email(e);
        validar_mensaje(e);
        validar_edad(e)
    }
    
    formulario.addEventListener("submit",validar)
    }())