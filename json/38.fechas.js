var fecha = new Date()
document.write(fecha)

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var hour=fecha.getTime();
 var ano =`
   el año es ${year}
   <br>
   el mes es ${mes}
   <br>
   la hora es ${hour}
 `
 document.write(ano)