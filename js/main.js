
let n =  new Date();
y = n.getFullYear();
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
document.getElementById("fechaactual").innerHTML = dias[n.getDay()] + " " + n.getDate() +" de "+ meses[n.getMonth()] + " de " + y;
 