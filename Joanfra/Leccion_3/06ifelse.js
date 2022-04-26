//condicionalles
var condicion = false;

if (condicion) {
    console.log("La condición es cierta");

} else {
    console.log("La condición es falsa")
}

//condicionalles encadenados
/* var condicion = false;

if (condicion1) {
    console.log("La condición es la 1");
} else if (condicion2){
    console.log("La condición es la 2")
} else if (condicion3){
    console.log("La condición es la 3")
}else if (condicion4){
    console.log("La condición es la 4")
}else if (condicion5){
    console.log("La condición es la 5")
}else if (condicion6){
    console.log("La condición es la 6")
} else {
    console.log("La condición no es ninguna")
} */

//condicionalles anidados


/* Se debe realizar un programa que, dados dos números, imprima por pantalla si el primer número es múltiplo del segundo.
Por ejemplo, con las siguientes variables:
var primer = 20;
var segundo = 2;

Se debería imprimir:
20 es múltiplo de 2.

Con las siguientes variables:
var primer = 23;
var segundo = 2;

Se debería imprimir:
23 no es múltiplo de 2. */


var a = 23;
var b = 2;

if (a % b == 0) {
    console.log("El número", a, "es múltiplo de", b) 
} else {
    console.log("El número", a, "NO es múltiplo de", b)
}
