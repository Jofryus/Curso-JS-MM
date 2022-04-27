// las funciones son formas de agrupacioon logica
/* function proceso1 () {
    console.log('estoy ejecutando un proceso dentro de la funcion proceso1');
}
proceso1 ();
 */

// --------------------------------------------------------
// uso practico de las funciones len JS
var alumnos = [
    {
    nombre: 'nombre1', 
    apellido: 'apellido1'
    },
    {
        nombre: 'nombre2',
        apellido: 'apellido2'
    },
    {
        nombre: 'nombre3',
        apellido: 'apellido3'
    }
];

function nombre_completo (nombre, apellido){
    console.log(nombre + ' ' + apellido);
}

for (var alumno of alumnos) {
    nombre_completo(alumno.nombre, alumno.apellido)
}
// -------------------------------------------------------------
// -------------------las punciones pueden devolver resultados-----------
function midpoint (num1, num2){
    return (num1+num2)/2;
}

console.log(midpoint(2,4))

// ------------------funciones pueden ser variables i se pueden utilizar como qualquier dato--------------
//-------------------programacion funcional------------------------------------
var nombre = 'federico';
var logocaSaludar = function(nombre) {console.log('Hola, mi nombre es ' + nombre)};
function saludarSuperEducadamente(funcionPasadaPorParametro, nombre){
    console.log('Disculpe, perdone que le moleste, pero ');
    funcionPasadaPorParametro(nombre);
    console.log('Espero pasar una buena velada con usted.');
}

saludarSuperEducadamente(logocaSaludar, nombre);

//------------------eventos de interface----------------------
function processClickEvent(event) {
    //hago algo quando recibo un click.
}

// quiero que cuando se haga un click en un item se ejecute algo
var itemEnPantalla;  //algun item de la pantalla
//La libreria de frontend me proporciona una forma de ejecutar funciones quando se haga ckick.
itemEnPantalla.onClick(processClickEvent)