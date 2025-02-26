import "./style.css";
import Project from "./Project";
import { renderProjects } from "./renderDOM";

const addNewProjectButton = document.querySelector(`.add-project`);
export const allProjects = [];

addNewProjectButton.addEventListener(`click`, () => {
  allProjects.push(new Project());
  renderProjects(allProjects);
});
