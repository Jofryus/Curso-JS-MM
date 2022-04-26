// switch , para sustituir if encadenados, nos ahora tienpo si hay muchas condiciones
var status = 7;

switch (status){
    case 0:
        // option 0
        break;
    case 1:
        // opcion 1
        break;
    case 2:
        // option 2
        break;
    case 3:
        // option 3
        break;
    case 4:
        // option 4
        break;
}

// s'ha de ficar el break si no volem que es continui executant el switch

/* Escribe una función (utilizando SWITCH CASE) que diga cuantos días tiene un mes concreto.
Por ejemplo, con la siguiente entrada:
var month = 'Enero'
el programa debe escribir:
El mes de Enero tiene 31 días.

La cantidad de días de cada mes es la siguiente:
Mes	Días
Enero, Marzo, Mayo, Julio, Agosto, Octubre, Diciembre	31
Febrero	28/29
Abril, Junio, Setiembre, Noviembte	30 */

var month = 'julio';

switch (month) {
    case 'enero':
        console.log(month + " tiene 31 días.");
        break;
    case 'febrero':
        console.log(month + " tiene 28 días.");
        break;    
    case 'marzo':
        console.log(month + " tiene 31 días.");
        break;
    case 'abril':
        console.log(month + " tiene 30 días.");
        break;
    case 'mayo':
        console.log(month + " tiene 31 días.");
        break;
    case 'junio':
        console.log(month + " tiene 30 días.");
        break;            
    case 'julio':
        console.log(month + " tiene 31 días.");
        break;
    case 'agosto':
        console.log(month + " tiene 31 días.");
        break;    
    case 'setiembre':
        console.log(month + " tiene 30 días.");
        break;
    case 'octubre':
        console.log(month + " tiene 31 días.");
        break;
    case 'noviembre':
        console.log(month + " tiene 30 días.");
        break;
    case 'diciembre':
        console.log(month + " tiene 31 días.");
        break;              
}