//comprobar disponibilidad
if(typeof(localStorage) !=="undefined"){
    console.log("tienes local storage")
}else{
    console.log("no lo tienes")
}

//guardar datos.

localStorage.setItem("titulo","Hello")

//recuperar elemento.
document.querySelector("#kk").innerHTML = localStorage.getItem("titulo");