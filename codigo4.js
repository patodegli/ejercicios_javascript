function esParImpar(numeroEntero) {
  var resultado;
  var condicion = numeroEntero % 2 == 0;
  if(condicion){
    resultado = numeroEntero + " es par";
  } else {
    resultado = numeroEntero + " es impar";
  }
  return resultado;
}

var resultado = esParImpar(59);
alert(resultado);

  
  