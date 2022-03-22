import Task from './Task.js'
import UI from './UI.js'

// Dom events
document.getElementById('save-task').addEventListener( "click",function (e) {
    const name = document.getElementById("recipient-name").value;
    const task = new Task(name);
    
    const ui = new UI();
    ui.addTask(task)

    const exitButton = document.getElementById('exit-button');
    exitButton.click();
    
    e.preventDefault;
});

document.getElementById('to-do-list').addEventListener("click", function(e){
    const target = e.target;
    let button = null;
    if (target.parentElement.type === "button" ) {
        button = target.parentElement;
    } else if (target.type === "button") {
        button= target;
    } else if (target.parentElement.parentElement.type === "button") {
        button = target.parentElement.parentElement;
    } 
    
    if (button) {
        const ui = new UI();
        
        if (button.id === "rewrite"){
            ui.rewriteTask(button);
        } else {
            ui.deleteTask(button);
        }
            
    }

});