export default class ToDo {
  constructor(input) {
    this.text = input.value;
    this.date = new Date().getFullYear();
  }
}
