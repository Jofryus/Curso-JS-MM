// closure son funciones con su conatexto, variables etc.

function  createFunction(){             // definimos una funcion que dentro tiene otra funcion que sera devuelta
    var name = "Martin";                // creamos una variable que será unsda en el contexto de la funcion que definiremos
    function showname(){                // definimos la funcion que devolveremos man adelante
        console.log(name);
    }
    return showname;                    // devollvemos la funcion i su contexto
}

var myFunction = createFunction();      // asifnamos nuestra funcion a una variable
myFunction()                            // eje cutamos la variable i esto nos devuelve Martin sin haver passado ningun parametro
                                        // esto se debe a que hemos creado una funcion que ya tiene un contexto en ella, un closure, i cuyo valor de contexto es martin



// ejemplo de closure

function createSum(){                   // funcion para crear sumas
    let x = 4;
    return function(y){                 // funcion que suma
        return x + y;
    };
}

let sum4 = createSum(4);                // creamos la funcion que nos suma 4 a un numero "3"
console.log(sum4(3))
// -----------------------------

function createSum(x){                   // funcion para crear sumas
    return function(y){                 // funcion que suma
        return x + y;
    };
}
let sum5 = createSum(5);                  // creamos una funvion que suma 10
let sum10 = createSum(10);                // creamos la funcion que nos suma 4 a un numero "3"
console.log(sum5(3));
console.log(sum10(3))




