class Task {
    constructor (name, description) {
        this.name = name;
        this.description = description;
        this.id = Math.random();
    }
}

export default Task;