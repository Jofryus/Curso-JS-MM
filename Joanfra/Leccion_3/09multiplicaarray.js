var myArray = [2, 4, 5, 7, 50, 10];
var multiplicador = 2;

var multiplicaA = function multiplica (num1, num2){
    return num1 * num2;
}

function multiplicaArray (funcionMultiplica, array, multi){
    var i = 0;
    var result = [];
    for (var element of array) {
        var resultItem = funcionMultiplica(element, multi);
        result[i] = resultItem;
        i += 1; 
    }
    console.log(result);
}

multiplicaArray(multiplicaA, myArray, multiplicador);