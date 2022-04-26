var cierto = true;
var falso = false;
var escierto = true;

var a = 9;
var b = 6;
var aEsMayorQueb = a > b;
console.log(aEsMayorQueb); 

// <, >, <=, >=, ==, ===, !=, !==, 

/* Operadores booleanos &&(AND), ||(OR), !(NOT)
---(AND)&&----Tabla de verdad AND
1 && 1 = true
1 && 0 = false
0 && 1 = false
0 && 0 = false

---(OR)||----Tabla de verdad OR
1 || 1 = true
1 || 0 = true
0 || 1 = true
0 || 0 = false

---&&----Tabla de verdad AND
1 && 1 = true
1 && 0 = false
0 && 1 = false
0 && 0 = false

*/
/* 
El ejercicio consiste en, dadas dos rectas en una línea unidimensional, determinar si existe solape entre las dos rectas utilizando operaciones de comparación.
Por ejemplo, si definimos las rectas (a, b) y (c, d) con los siguientes valores:

------a-------------b--------------

--------------c-------------------d-

var a = 5;
var b = 20;
var c = 10;
var d = 25;

como existe un solape entre las dos rectas, el programa debería devolver TRUE. */

var a = 10;
var b = 20;
var c = 50;
var d = 40;

var haySolape = ((c > a && c < b) || (d > a && d < b)) || ((c < a && d > b) || (c > b && d < a));

console.log(haySolape);



