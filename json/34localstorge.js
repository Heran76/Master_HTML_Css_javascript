

//comprobar disponibilidad
if(typeof(localStorage) !=="undefined"){
    console.log("tienes local storage")
}else{
    console.log("no lo tienes")
}

//guardar datos.

localStorage.setItem("titulo","Hello")

//recuperar elemento.
//document.querySelector("#c1").innerHTML=localStorage.getItem("titulo")

//guardar objetos.

var usuario ={
    nombre: "Antonio Robles",
    email: "Victor@victor.com",
    web:"victorroblesweb.es"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto.

var userjs =JSON.parse(localStorage.getItem("usuario"));

console.log(userjs)

document.querySelector("#peliculas").append(" "+userjs.web);