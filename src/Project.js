import ToDo from "./toDo";

export default class Project {
  constructor() {
    const projectName = document.querySelector(`#add-project`).value;
    this.name = projectName;
    this.toDoList = [];
  }
  createToDo(input) {
    this.toDoList.push(new ToDo(input));
  }
}
