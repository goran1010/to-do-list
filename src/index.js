import "./style.css";
import Project from "./Project";
import { renderProjects } from "./renderProjects";
import { saveToStorage } from "./saveToStorage";
import ToDo from "./toDo";

let allProjects = [];

if (localStorage.getItem("My-projects")) {
  allProjects = JSON.parse(localStorage.getItem("My-projects"));
  allProjects.forEach((project) => {
    project.createToDo = function (input) {
      this.toDoList.push(new ToDo(input));
    };
  });
  renderProjects(allProjects);
}

const addNewProjectButton = document.querySelector(`.add-project`);
addNewProjectButton.addEventListener(`click`, () => {
  allProjects.push(new Project());
  renderProjects(allProjects);
  saveToStorage();
});
export { allProjects };
