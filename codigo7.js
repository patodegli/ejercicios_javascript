/* var enlaces = document.querySelectorAll("a").length
// alert("hay " + enlaces + " enlaces en la página")

var arrayEnlaces = document.querySelectorAll("a")
/* var sextoEnlace = arrayEnlaces[5]
alert(sextoEnlace.href) */
/* var indice = arrayEnlaces.length-2
var penultimoEnlace = arrayEnlaces[indice]
alert(penultimoEnlace.href)  */

/* var arrayDeAnchor = document.querySelectorAll("a")
var contador = 0
for (var i = 0; i < arrayDeAnchor.length; i++) {
  var element = arrayDeAnchor[i];
  var href = element.href;
  console.log(href);
  if (href == "http://prueba/") {
    contador = contador + 1
  }
}
alert(contador) */

var arrayAnchor = document.querySelectorAll("p:nth-child(4) > a")
/* var cantidadAnchor = arrayAnchor.length */
alert("la cantidad de anchors del 3er párrafo es " + arrayAnchor.length);
