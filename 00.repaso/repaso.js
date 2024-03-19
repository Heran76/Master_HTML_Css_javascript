
function cambiaColor(color){
    micaja.style.background = color;
}



var micaja = document.getElementById("micaja")
micaja.innerHTML="Texto desde js"
micaja.style.background="green"
micaja.style.padding="20px"
micaja.style.color="white"

//conseguir elementos por etiqueta

var todoslosdiv = document.getElementsByTagName('div');
var texto = todoslosdiv[2].innerHTML="Hola caracola"

var valor;
    for (valor in todoslosdiv){
    if(typeof todoslosdiv[valor].textContent == 'string'){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todoslosdiv[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").prepend(parrafo)
}
}

