//los scopes es que valor tienen las variables dependiendo si son glovales o locales
var gloval = 4;
var vlocal = 0;
function local(){
    var vlocal = 2;
    console.log(vlocal);
}
console.log(vlocal, gloval);
local();


// let nos permite construir variables de blocke i no saldran del blocke
if (condition) {
    // esto es un blocke
    let variable = 0;
} 
for (let i = 0; i <  10; i++) {
    //esto es un bloque
}
for (let i = 0; i <  10; i++) {
    //esto es otro bloque
}
for (let i = 0; i <  10; i++) {
    //esto es otro bloque
}
for (let i = 0; i <  10; i++) {
    //esto es otro bloque
}
for (let i = 0; i <  10; i++) {
    //esto es otro bloque
}
// con el let inpedimos que haya conflictos entre las i ya que pertenecen a bloques diferentes. Esto no se podrà hacer con var

// const es la palavra que nos permite crear variables constatntytes i no se podran modificar

const pi = 3.1416;  // no podremos modificar pi