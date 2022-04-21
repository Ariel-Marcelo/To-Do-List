import Task from "./Task.js";

class User {
  static user = null;

  constructor() {
      this.name = "Paco";
      this.lastName = "Chicaiza";
      this.taskList = [];
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
    this.taskList.push(task);
  }

  finalTask() {
    return this.taskList[this.taskList.length - 1];
  }

  updateTask(id , changes) {
    const index = this.taskList.findIndex(task => task.id == id);
    this.taskList[index] = {...this.taskList[index], ...changes};
  }

  deleteTask(name) {
    const index = this.taskList.findIndex(task => task.name === name);
    this.taskList.splice(index, 1);
  }

  getAllTasks() {
    return this.taskList;
  }

}

export default User;
