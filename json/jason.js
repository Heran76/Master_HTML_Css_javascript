'use stict'

//Json - javascript object Notation

var pelicula = {
    titulo: 'Batman  vs superman',
    year:2017,
    pais: 'Estados unidos'
};

var peliculas = [
    {titulo:"la verdad duele", year: 2016, pais:"Francia"},
    pelicula
];

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo+" - "+peliculas[index].year);
    caja_peliculas.append(p);
}

