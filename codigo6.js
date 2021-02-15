function quitaEspaciosYpasaMinuscula(textoConEspacios) {
  var textoArray = textoConEspacios.split(" ");
  var textoSinEspacio = textoArray.join("");
  return textoSinEspacio.toLowerCase();
}
/* var resultado = quitaEspacios("hola mundo")
alert(resultado); */
/* difinir una funcion que recibiendo una cadena de texto con espacios, devuelva la misma cadena pero sin los espacio*/







function verificaPalindromo(cadenaTexto) {
  var cadenaSinEspacio = quitaEspaciosYpasaMinuscula(cadenaTexto);
  
  var textoArray =  cadenaSinEspacio.split("");
  var arrayReverse = textoArray.reverse();
  var textoInvertido = arrayReverse.join("");
  var resultado;
  if (cadenaSinEspacio == textoInvertido){
    resultado = "es palíndromo";
  } else {
    resultado = "no es palíndromo";
  }
  return resultado;
}

var resultado = verificaPalindromo("dabale arroz a la zorra el abad");
alert(resultado);


/* Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de
palíndromo complejo: "La ruta nos aporto otro paso natural". */
