const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,                   // usaremos el terminal entrada i salida
    output: process.stdout
});

// variables
let taskList = [];

// funciones

function addTask (taskList, taskDescription) {
    taskList.push({done: false, description:taskDescription}); 
}

/* taskDescription = 'sacar la basura';         // Control
addTask(taskList, taskDescription);

taskDescription = 'pintar';
addTask(taskList, taskDescription);

taskDescription = 'sacar al perro';
addTask(taskList, taskDescription);

console.log(taskList); 
 */

/* function askForTask (taskList){                                         // añadir tarea no hecha
    rl.question ('Introduce una tarea (-exit- pata salir <-> -fin- para finalizar tareas): ', function(taskDescription){
 //       console.log(taskList);                                          // control
        if (taskDescription === 'exit'){
            rl.close();
        }else{
            addTask(taskList, taskDescription );
            printTasks(taskList);
            askForTask(taskList);
        }
    });

} */

function printTasks (taskList){                                         // imprimir lista
    for (task of taskList) {
        if (task.done == true) {
            console.log((taskList.indexOf(task) + 1) + '. [x] -- ' + task.description);
        }else{
            console.log((taskList.indexOf(task) + 1) + '. [ ] -- ' + task.description);
        }
    }
}


// modo 1 lectura de tareas
function mode1 (taskList){
    rl.question ('Introduce una tarea: ', function(taskDescription){
        switch (taskDescription){
            case 'fin':
                console.log('No se introduciran mas tareas.')
                mode2(taskList);
                break;
            case 'exit':
                rl.close();
            default:
                addTask(taskList, taskDescription );
                printTasks(taskList);
                mode1(taskList);
        }
    });
};



// modo 2 marcar las tareas

function allTaskDone (taskList){
    for (task of taskList){
        if (!task.done) return false;
    }
    return true;
}

function markDone(taskList, taskNumber){
    taskList[Number(taskNumber)-1].done = true;
//    console.log(taskList);
}

function mode2 (taskList){
    printTasks(taskList);
    rl.question ( 'que tarea has finalizado -- (1-N) -fin- para terminar--? ', function(taskNumber) {
        if (taskNumber == 'fin'){
            rl.close();
        }else{
            markDone(taskList, taskNumber);
            if (allTaskDone(taskList)){
                console.log('well done, you had finished all tasks')
                rl.close();
            }else{
                mode2(taskList);
            }
        }
    });
}

mode1(taskList);
