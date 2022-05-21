const readline = require('readline');
const moment = require('moment');

const rl = readline.createInterface({
    input: process.stdin,                   // usaremos el terminal entrada i salida
    output: process.stdout
});

rl.question('Como te llamas? ', function(answerName){
    // escrive la respuesta    // CallBacks
    console.log(`Encantado de conocerte ${answerName}`)
    rl.question('Cuantos años tienes? ', function(answerAge){
        // escrive la respuesta    // CallBacks
        if (answerAge > 40){
            console.log(`pareces mas joven, ${answerName}`);
        } else{
            console.log(`eres muy joven!!, solo tienes ${answerAge} años`);
        }

        rl.close();
        
    });

});

