// El scope es el contexto donde una variable es avisible
// ecisten w scopes principales Global i Local

// las lvariables glovales se pueden ver i modificar desde qualquies sitio del programa, lo que puede ser peligroso
// las variables locales solo seran visibles desde dentro de la funcion donde esten, en el resto del programa no existiran.

// var nos define variables en scope GLOVAL

var variableGlobal = 1;

function global(){
    console.log('variable varriableGloval en local');
    console.log(variableGlobal);
}

global();
console.log('variable variableGlaobal en global');
console.log(variableGlobal);

//variable local solo esta dentro del scope en que se encuentra i no se puede modificar fuera
var variableLocal = 4;                      // es GLobal
function local(){
    var variableLocal = 2;
    console.log('variable variableLoval en local');
    console.log(variableLocal);
}

local();
console.log('variable variableLocoal en golbal');
console.log(variableLocal);             // undefined, la variable local esta fuera del scope

// ¡scope de bloque, entre los corchetes el scope es de bloque, i los let respeta el scope de bloque

if (variableLocal > variableGlobal){
    console.log('variable variablebloque en el bloque');
    let variableBloque = 7
    console.log(variableBloque);
}

//console.log(variableBloque);             // la variable de bloque no existe fuera del bloque

