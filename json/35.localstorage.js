var formulario = document.querySelector("#formpeliculas");
formulario.addEventListener('submit', function(event){
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue
    var titulo = document.querySelector("#addpelicula").value;
    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo); // Solo almacenar el título como valor en localStorage
        var ul = document.querySelector("#peliculas_list");
        var li = document.createElement("li");
        li.textContent = titulo; // Utilizar textContent para asignar el título como texto del elemento li
        ul.appendChild(li); // Agregar el elemento li a la lista ul
    }
});

// Mostrar las películas almacenadas en localStorage al cargar la página
var ul = document.querySelector("#peliculas_list");
for (var i = 0; i < localStorage.length; i++) {
    var clave = localStorage.key(i);
    var valor = localStorage.getItem(clave);
    if (typeof valor === 'string') {
        var li = document.createElement("li");
        li.textContent = valor; // Utilizar textContent para asignar el título como texto del elemento li
        ul.appendChild(li); // Agregar el elemento li a la lista ul
    }
}

var formulariob = document.querySelector("#formBorrarPeliculas");
formulariob.addEventListener('submit', function(event){
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue
    var titulo = document.querySelector("#borrarPelicula").value;
    if (titulo.length >= 1) {
        localStorage.removeItem(titulo);
        // Remover el elemento de la lista si existe
        var lis = ul.getElementsByTagName("li");
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].textContent === titulo) {
                ul.removeChild(lis[i]);
                break;
            }
        }
    }
});

