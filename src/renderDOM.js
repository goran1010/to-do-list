import renderToDo from "./renderToDo";

export function renderProjects(allProjects) {
  const container = document.querySelector(`.all-projects`);
  container.innerHTML = ``;
  const allToDo = document.querySelector(".all-to-do");
  allToDo.innerHTML = ``;
  allProjects.forEach((project, index) => {
    const div = document.createElement(`div`);
    div.textContent = `${project.ID} ${project.name}`;

    const removeProject = document.createElement(`button`);
    removeProject.addEventListener(`click`, () => {
      allProjects.splice(index, 1);
      renderProjects(allProjects);
    });
    removeProject.textContent = "Delete";

    div.setAttribute(`data-project-ID`, project.ID);
    div.addEventListener(`click`, () => {
      const cont = document.querySelector(".to-do");
      cont.innerHTML = ``;
      const label = document.createElement(`label`);
      const input = document.createElement(`input`);
      const button = document.createElement(`button`);
      label.setAttribute(`for`, "add-to-do");
      label.textContent = "To do text";
      input.setAttribute(`id`, "add-to-do");
      button.setAttribute(`class`, "add-to-do");
      button.textContent = "Add to do";

      button.addEventListener(`click`, () => {
        project.createToDo(input);
        renderToDo(project, allToDo);
      });

      cont.append(label, input, button);
      renderToDo(project, allToDo);
    });
    div.appendChild(removeProject);
    container.appendChild(div);
  });
}
