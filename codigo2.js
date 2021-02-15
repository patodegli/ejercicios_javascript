var dni = prompt("ingrese nro del dni");
var usuario_letra = prompt("ingrese letra del dni")
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var resultado = dni % 23
var letraDni = letras[resultado];



if (dni < 0 || dni > 99999999){
  alert("no es válido");
} else {
  if (usuario_letra == letraDni){
    alert("letra valida");
  } else {
    alert("letra invalida");
  }
}
/*if(dni >= 0 && dni <= 99999999){
  alert("si es válido");
}*/
