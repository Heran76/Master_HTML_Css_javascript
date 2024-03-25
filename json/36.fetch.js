//Fetch y peticiones a servicios / api

//https://reqres.in/api/users

var div_usario = document.querySelector("#usuarios")

var usuario = []
fetch('https://reqres.in/api/users')
.then(data => data.json())
.then(user =>{
  usuario = user.data
  console.log(usuario)
  
  usuario.map((user, i)=>{
    let nombre = document.createElement('p');
    nombre.innerHTML=i+" "+user.first_name;
    div_usario.appendChild(nombre);
  })
})