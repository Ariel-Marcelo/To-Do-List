import User from './User.js';
import UI from './UI.js'

const user = User.createUser();

// Dom events

// evento al salvar una nueva tarea
document.getElementById('save-task').addEventListener( "click",function (e) {

    const name = document.getElementById("recipient-name").value;
    const description = document.getElementById("message-text").value;

    user.createTask({name: name, description: description});
    const ui = new UI();
    ui.addTask(user.finalTask());
    

    const exitButton = document.getElementById('exit-button');
    exitButton.click();
    
    e.preventDefault;
});

// evento al clickear un boton de la lista de tareas
document.getElementById('to-do-list').addEventListener("click", function(e){
    const target = e.target; // nos devuelve el elemento clickeado deltro del to-do-list
    let button = null;
    if (target.parentElement.type === "button" ) { // si el elemento padre es un boton
        button = target.parentElement;
    } else if (target.type === "button") { // o si este es un boton
        button= target;
    } else if (target.parentElement.parentElement.type === "button") { // o si el padre de su padre es un boton
        button = target.parentElement.parentElement;
    } 

    if (button) { // si resulto que clickamos un boton
        const ui = new UI();
        
        if (button.id === "rewrite"){
           ui.rewriteTask(button);
        } else {
            ui.deleteTask(button);
        }
            
    }

});


