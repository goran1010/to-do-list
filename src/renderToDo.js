export default function renderToDo(project, allToDo) {
  allToDo.innerHTML = ``;
  project.toDoList.forEach((toDo, index) => {
    const toDoDiv = document.createElement(`div`);
    toDoDiv.textContent = `${toDo.text} ${toDo.date}`;
    const removeToDo = document.createElement(`button`);
    removeToDo.textContent = "Remove ToDo";
    removeToDo.addEventListener(`click`, () => {
      project.toDoList.splice(index, 1);
      renderToDo(project, allToDo);
    });

    toDoDiv.appendChild(removeToDo);
    allToDo.appendChild(toDoDiv);
  });
}
