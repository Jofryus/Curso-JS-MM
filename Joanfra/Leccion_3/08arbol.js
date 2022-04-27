var pisos = 5;
var piso = 1;
var asteriscos = '*';
while (piso < pisos) {
    var espacios = '';
    for (var nespacios = 0; nespacios < (pisos-piso); nespacios += 1) {
        espacios = espacios + ' ';
    }
    console.log(espacios + asteriscos);
    piso += 1;
    asteriscos += '**';
}

