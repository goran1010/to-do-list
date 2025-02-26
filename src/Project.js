import ToDo from "./toDo";

export default class Project {
  static ID = 0;
  constructor() {
    const projectName = document.querySelector(`#add-project`).value;
    this.ID = ++Project.ID;
    this.name = projectName;
    this.toDoList = [];
  }
  createToDo(input) {
    this.toDoList.push(new ToDo(input));
  }
}
