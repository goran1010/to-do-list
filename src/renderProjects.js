import renderToDo from "./renderToDo";
import { saveToStorage } from "./saveToStorage";

export function renderProjects(allProjects) {
  if (!document.querySelector(`.remove-storage`)) {
    const removeStorage = document.createElement(`button`);
    removeStorage.classList.add("remove-storage");
    removeStorage.textContent = "Remove Storage";
    document.querySelector(`.project`).appendChild(removeStorage);
    removeStorage.addEventListener(`click`, () => {
      localStorage.removeItem("My-projects");
      removeStorage.remove();
    });
  }

  const container = document.querySelector(`.all-projects`);
  container.innerHTML = ``;
  const allToDo = document.querySelector(".all-to-do");
  allToDo.innerHTML = ``;
  allProjects.forEach((project, index) => {
    const div = document.createElement(`div`);
    div.textContent = `${project.name}`;
    const removeProject = document.createElement(`button`);
    removeProject.textContent = "Delete";
    removeProject.classList.add(`remove-project`);

    removeProject.addEventListener(`click`, () => {
      allProjects.splice(index, 1);
      renderProjects(allProjects);
      saveToStorage();
    });

    div.setAttribute(`data-project-ID`, project.ID);
    div.addEventListener(`click`, () => {
      renderToDo(project, allToDo);
    });
    div.appendChild(removeProject);
    container.appendChild(div);
  });
}
