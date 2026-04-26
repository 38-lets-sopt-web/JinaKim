const addbtn = document.querySelector("#add-button");
const list = document.querySelector("#list");
const input = document.querySelector("#user-input");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todos);

const renderTodo = (todo) => {
  const li = document.createElement("li");
  li.textContent = todo;
  list.appendChild(li);
};

todos.forEach((todo) => {
  renderTodo(todo);
});

const addList = () => {
  const value = input.value;
  if (!value) return;

  renderTodo(value);

  todos.push(value);
  localStorage.setItem("todos", JSON.stringify(todos));

  input.value = "";
};

addbtn.addEventListener("click", addList);
