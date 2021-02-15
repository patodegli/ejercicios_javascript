var numero = prompt("ingrese numero");
var acumulado = 1;
for (var i = numero; i >= 1; i--) {
    //alert(acumulado)
    acumulado = acumulado * i;
} 
alert(acumulado);