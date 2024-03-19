function cambiar() {
  console.log("Me has dado click");
  var bg = boton.style.background;

  if (bg == "green") {
    boton.style.background = "red";
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";
  } else {
    boton.style.background = "green";
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";
  }
}
var boton = document.querySelector("#boton");

//click
boton.addEventListener("click", function () {
  cambiar();
});

//Mouse over
boton.addEventListener('mouseover',function(){
    boton.style.background="gray"
    boton.style.cursor="pointer"
})

//Mouse out
boton.addEventListener('mouseout',function(){
    boton.style.background="white"
})

//eventos para formulario
//focus
var input = document.querySelector("#campo_nombre")
input.addEventListener('focus',function(){
    console.log("Hello world");
})

//Blur

input.addEventListener('blur',function(){
    console.log("Good bye world");
})
//keydown
input.addEventListener('keydown',function(event){
console.log("press key",String.fromCharCode(event.keyCode));
})

//keypress
input.addEventListener('keypress',function(event){
  console.log("Tecla presionada",String.fromCharCode(event.keyCode));
  })
//keyup
input.addEventListener('keyup',function(event){
  console.log("Tecla soltada",String.fromCharCode(event.keyCode));
  })