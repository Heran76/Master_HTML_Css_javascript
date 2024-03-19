
window.addEventListener('load',function(){
    console.log("DOM Cargado")
        var caja = document.querySelector(".dashed")
        caja.style.display="none"
       
    var formulario = document.querySelector("#formulario")
    formulario.addEventListener('submit',function(){
        console.log("evento capturado")
       
        var nombre = document.querySelector("#nombre").value;
        var apellidos=document.querySelector("#apellidos").value
        var edad = parseInt(document.querySelector("#edad").value);

        //validacion campo de formulario
        if(nombre.trim() == null || nombre.trim().length == 0) {
            var error_nombre = document.querySelector("#error_nombre");
            error_nombre.innerHTML = "El nombre introducido no es valido";
            error_nombre.style.color = "red"; // Cambiar el color del texto a rojo
            return false;
        } else {
            document.querySelector("#error_nombre").style.display = "none"; 
        }
        

        if(apellidos.trim()==null || apellidos.trim().length == 0){
            var error_apellidos = document.querySelector("#error_apellidos");
            error_apellidos.innerHTML = "Los apellidos introducidos no son validos introducido no es valido";
            error_apellidos.style.color = "red"; // Cambiar el color del texto a rojo
            return false;
        } else {
            document.querySelector("#error_apellidos").style.display = "none"; 
        }
            
        

        if(edad == null || edad <= 0 || isNaN(edad)){
            var error_edad = document.querySelector("#error_edad");
            error_edad.innerHTML = "La edad introducidad no es la correcta";
            error_edad.style.color = "red"; // Cambiar el color del texto a rojo
            return false;
        } else {
            document.querySelector("#error_edad").style.display = "none"; 
        }
        


        caja.style.display="block"
        
        var p_nombre =document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span")
        var p_edad = document.querySelector("#p_edad span")
        
        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML=apellidos;
        p_edad.innerHTML=edad;
       
       
        /* 
        var datosusuario = [nombre,apellidos,edad]
        var indice;
        for(indice in datosusuario){
         var parrafo=document.createElement('p');
          parrafo.append(datosusuario[indice]);
          caja.append(parrafo);
        }
       */
       
       
        
        
    })
})