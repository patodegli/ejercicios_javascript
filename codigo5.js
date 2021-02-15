function verificadorDeTexto(cadenaTexto) {
  var resultado;
  var esMayuscula = cadenaTexto == cadenaTexto.toUpperCase();
  var esMinuscula = cadenaTexto == cadenaTexto.toLowerCase();
  if(esMayuscula){
    resultado = "es mayuscula"
  } else if(esMinuscula){
    resultado = "es minuscula"
  } else {
    resultado = "es mixta"
  }
  return resultado;
}
var resultado = verificadorDeTexto("aa");
alert(resultado);


/* Definir una función que muestre información sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */
