// JSON - Javascript object Notacion
var pelicula = {
    titulo : "Hello world",
    year : 2023,
    pais : "España",
}

var peliculas =[
    pelicula,
    {titulo:"Hola la caracola", year:2024, pais:"España"}
]

var caja_peliculas = document.querySelector('#peliculas');
var index;
for(index in peliculas){
    var p =document.createElement('p');
    p.append(peliculas[index].titulo+"-"+peliculas[index].year);
    caja_peliculas.append(p)
}





