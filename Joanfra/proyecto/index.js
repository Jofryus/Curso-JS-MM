const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,                   // usaremos el terminal entrada i salida
    output: process.stdout
});

// estructura de datos
    // valor booleano + descirocion de ratea
    // lista o vector
let hola = [1,2,3,4,5];
let taskList = [];
console.log(typeof(taskList));
console.log(typeof(hola));
console.log(hola)
    //  valor booleano + descripcion

/*     let task = {
        done: false,
        description: 'sacar la basura'
    }   o    */ 

    // done: false, description: 'sacar la basura'

// funciones
console.log(typeof(taskList));
    // añadir tareas
function addTask(taskList, taskDescription){           // añadimos una tarea a la lista como siempre serà falso cuando la anyadamos solo hace falta la descripcion
    taskList.push ({done: false, description: taskDescription});
}

// mostrar lista de tareas
function printTaskList(taskList){
    //[] 'sacar la basura'
    //[X] 'sacar la basura'
    for (task of taskList){
        if (task.done) {
            // tarea realizada
            console.log(`[x] ${task.description}`);
        }else{
            // tarea pendiente
            console.log(`[] ${task.description}`);
        }
    }
}

printTaskList(taskList);

/* function doit (tasklist, taskdescription){
    function addTask(tasklist, taskdescription){           // añadimos una tarea a la lista como siempre serà falso cuando la anyadamos solo hace falta la descripcion
        let index = tasklist.taskdescription.indexOf(taskdescription);
        tasklist[index]
    }
} */

// modo 1: lectura de tareas
function askForTask(taskList) {
    printTaskList(taskList);
    rl.question('Introduce una nueva tarea (fin si terminas)', function(taskDesc) {
        // introduce tarea nueva
        addTask(taskList, taskDesc);
        console.log(taskDesc);
//        printTaskList(taskList);
        mode1(taskList);
        rl.close();
    });
}

askForTask();
// modo 2: marcado de tareas realizadas

