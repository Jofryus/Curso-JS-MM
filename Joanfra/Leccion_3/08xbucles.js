
/* for (let item of vector) {

} 
*/

/*      ------------------------------------------------------ */
/* imprimir els valors de qualsevol array de dos maneres diferents */

var  array = [10, 20, 30];
var length = array.length;

for (var item = 0; item < length; item += 1) {
    console.log(array[item])
}
/*      ------------------------------------------------------ */
var  array = [10, 20, 30];

for (var item = 0; item < array.length; item += 1) {
    console.log(array[item])
}
/* inprimir los valores de un array de objetos compuesto lpor estudiantes i notas. */
/*      ------------------------------------------------------ */
var  array = [
    {
    nombre: 'Estudiante 1',
    nota: 6
    },
    {
        nombre: 'Estudiante 2',
        nota: 3
    },
    {
        nombre: 'Estudiante 3',
        nota: 8
    }
];

for (var item = 0; item < array.length; item += 1) {
    console.log(array[item].nombre, array[item].nota)
}

// interar sobre vectores i objetos
/*      -----------for of para vectores ----------------- */
var  estudiantes = [
    {
    nombre: 'Estudiante 1',
    nota: 6
    },
    {
        nombre: 'Estudiante 2',
        nota: 3
    },
    {
        nombre: 'Estudiante 3',
        nota: 8
    }
];
/*      ---------funcion sin simplificar------------------- */
for (var i = 0; i < estudiantes.length; i += 1) {
    console.log(estudiantes[i].nombre, estudiantes[i].nota);
};
/*      ---------funcion simplificada---------------------- */
for (var estudiante of estudiantes) {
    console.log(estudiante.nombre, estudiante.nota);
};
//      -----------for in para objetos------------------------------------------------
/*      ---------nos da el resultado de llas key de los objetos---------------------- */
var estudianteTipo = {
    nombre: 'Estudiante 10',
    nota: 7,
}
for (var key in estudianteTipo) {
    console.log(key);
    console.log(estudianteTipo[key]);
};




/* 
for (let array of length) {
    console.log(a)
}
 */