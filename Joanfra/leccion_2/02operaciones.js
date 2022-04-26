var a = 5;
var b = 2;
// suma
var suma = a + b
console.log(suma);
// resta
var resta = b - a;
console.log(resta);
// multiplicacion
var multiplicacion = a * b;
console.log(multiplicacion);
// division
var division = a / b;
console.log(division);
// modulo
var resto = a % b;
console.log(resto);
// potencia o exponencianion
var potencia = a ** b;
console.log(potencia);

// incrementos o decrementos
a  = a + 1;
console.log(a);
b ++;
console.log(b);
a += 2;
a *= 2;  //a multiplicada por 2, o / o + o etc

// texto

var nombre = 'Joanfra';
var apellido = 'Varga';
var nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// las combinaciones de dos tipos de variables se convierten en una de las dos, text + núm = a text

var a = 3;
var b = 'hola';
var c = a + b;
console.log(c);

/* Ejercicio: Programa que nos diga los buenos días, utilizando una variable con nuestro nombre y otra con el saludo.
El objetivo es que el programa nos imprima por pantalla algo parecido a lo siguiente:

'Buenos dias NOMBRE' */

var nombre = 'Joanfra'
var saludo = 'Buenos días'
var saludoPersonalizado = saludo + ' ' + nombre;
console.log(saludoPersonalizado);