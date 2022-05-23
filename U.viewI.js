import User from "./User.model.js";

class UI {
  constructor() {

    this.user = User.createUser();
    // charge ui tasks
    const todoList = this.user.getAllTasks()
    for (const todo of todoList) {
        this.addTask(todo);
    }
    // evento al clickar en el boton de salvar tarea
    const btSaveTask = document.getElementById("save-task");
    btSaveTask.addEventListener("click", () => this.saveTask());
    // evento al clickar en el boton de eliminar tarea
    const task_list = document.getElementById("to-do-list");
    task_list.addEventListener("click", (e) => this.crudOperations(e));
  }

  saveTask() {
    // se obtiene el name y la description del modal desplegado
    const name = document.getElementById("recipient-name").value;
    const description = document.getElementById("message-text").value;
    // Como usuario debo primero crear una tarea
    const taskCreated = this.user.createTask({ name: name, description: description });
    this.addTask(taskCreated);

    document.getElementById("exit-button").click();
  }

  crudOperations(e) {
    const target = e.target; // nos devuelve el elemento clickeado deltro del to-do-list
    let button = null;
    if (target.parentElement.type === "button") {
      // si el elemento padre es un boton
      button = target.parentElement;
    } else if (target.type === "button") {
      // o si este es un boton
      button = target;
    } else if (target.parentElement.parentElement.type === "button") {
      // o si el padre de su padre es un boton
      button = target.parentElement.parentElement;
    }

    if (button) {
      if (button.id === "rewrite") {
        this.rewriteTask(button);
      } else {
        this.deleteTask(button);
      }
    }
  }

  addTask(task) {
    const task_list = document.getElementById("to-do-list");
    const element = document.createElement("div");
    element.className = "to-do-list__card";
    element.setAttribute = "id=" + task.id;
    element.innerHTML = `
            <p>${task.name}</p>
            <div class="to-do-list--options">
            <button id="rewrite" type="button">
                <svg
                
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-vector-pen"
                viewBox="0 0 16 16"
                >
                <path
                    fill-rule="evenodd"
                    d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
                />
                <path
                    fill-rule="evenodd"
                    d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"
                />
                </svg>
            </button>
            <button id="delete" type="button">
                <svg
                    
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eraser"
                    viewBox="0 0 16 16"
                    >
                    <path
                        d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"
                    />
                </svg>
            </button>
            </div>
        `;

    task_list.appendChild(element);
  }

  showMessage(message) {}

  deleteTask(button) {
    const taskId = button.parentElement.parentElement.id;
    this.user.deleteTask(taskId);
    button.parentElement.parentElement.remove();
  }

  rewriteTask(button) {
    document.getElementById("btn-update-new-task").click();
  }
}

export default UI;
