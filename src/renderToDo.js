import { saveToStorage } from "./saveToStorage";

export default function renderToDo(project, allToDo) {
  const cont = document.querySelector(".to-do");
  cont.innerHTML = ``;
  const label = document.createElement(`label`);
  const input = document.createElement(`input`);
  const button = document.createElement(`button`);
  label.setAttribute(`for`, "add-to-do");
  label.textContent = "To do text";
  input.setAttribute(`id`, "add-to-do");
  input.setAttribute(`value`, "Some ToDo");
  button.setAttribute(`class`, "add-to-do");
  button.textContent = "Add to do";

  button.addEventListener(`click`, () => {
    project.createToDo(input);
    renderToDo(project, allToDo);
    saveToStorage();
  });

  cont.append(label, input, button);

  allToDo.innerHTML = ``;
  project.toDoList.forEach((toDo, index) => {
    const toDoDiv = document.createElement(`div`);
    toDoDiv.textContent = `${toDo.text} ${toDo.date}`;
    const removeToDo = document.createElement(`button`);
    removeToDo.classList.add(`remove-to-do`);
    removeToDo.textContent = "Remove ToDo";
    removeToDo.addEventListener(`click`, () => {
      project.toDoList.splice(index, 1);
      renderToDo(project, allToDo);
      saveToStorage();
    });

    toDoDiv.appendChild(removeToDo);
    allToDo.appendChild(toDoDiv);
  });
}
