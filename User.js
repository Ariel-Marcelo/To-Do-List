import Task from "./Task.js";

class User {
  static user = null;
  

  constructor() {
    this.user = {
      name: "Paco",
      lastName: "Chicaiza",
      taskList: [

      ]
    }
  }

  static createUser() {
    if (this.user === null) {
      return this.user = new User();
    }else {
      return this.user;
    }
  }

  createTask({ name, description }) {
    const task = new Task(name, description);
    this.user.taskList.push(task);
  }

  finalTask() {
    return this.user.taskList[this.user.taskList.length - 1];
  }

  updateTask({ name, description }) {
    const task = new Task(name, description);
  }

  deleteTask(name) {
    const index = this.user.taskList.findIndex(task => task.name === name);
    this.user.taskList.splice(index, 1);
    console.log (this.user.taskList);
  }

  getAllTasks() {
    return this.user.taskList;
  }

}

export default User;
