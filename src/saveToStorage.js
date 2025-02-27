import { allProjects } from "./index.js";

export function saveToStorage() {
  localStorage.setItem("My-projects", JSON.stringify(allProjects));
}
