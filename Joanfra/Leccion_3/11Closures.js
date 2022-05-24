// closures son clausuras son funciones con su contexto.
// una funcion nos puede devolver otra funcion (una logica i otra logica)

function createFunction() {
    var name = "Federico";
    function showName() {
        console.log(name);
    }
    return showName;
    // reourn es un closure, y devuelve todo el contenido del contexto de showName, por lo tanto tambien devuelve el name que tiene en el scope donde se encuentra.
}

var myFunction = createFunction();
myFunction();


function createSum(x) {
    return function(y) {
        return x + y;
    };
};

let sum4 = createSum(4);
let sum10 = createSum(10);
console.log(sum4(3), sum10(3));
