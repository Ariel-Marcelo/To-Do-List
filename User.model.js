class User {
  static user = null;

  constructor() {
      this.name = "Paco";
      this.lastName = "Chicaiza";
      this.taskList = JSON.parse(localStorage.getItem('todoList')) || [];

  }

  static createUser() {
    if (this.user === null) {
      return this.user = new User();
    }else {
      return this.user;
    }
  }

  createTask({ name, description }) {
    const task = {
      name:  name,
      description: description,
      id: Math.random(),
    }
    this.taskList.push(task);
    this.save();
    return Object.assign({}, task);
  }

  finalTask() {
    return this.taskList[this.taskList.length - 1];
  }

  updateTask(id , changes) {
    const index = this.taskList.findIndex(task => task.id == id);
    this.taskList[index] = {...this.taskList[index], ...changes};
  }

  deleteTask(id) {
    const index = this.taskList.findIndex(task => task.id == id);
    this.taskList.splice(index, 1);
    this.save();
  }

  getAllTasks() {
    return this.taskList;
  }

  save() {
    localStorage.setItem('todoList', JSON.stringify(this.taskList));
  }

}

export default User;
