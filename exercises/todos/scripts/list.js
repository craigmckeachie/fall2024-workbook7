"use strict";

const todoList = document.querySelector("#todoList");
const newTodoInput = document.querySelector("#newTodoInput");

async function createTodo(event) {
  
  let todo = {
    title: newTodoInput.value,
    completed: false,
    userId: 1,
  };

  let response = await fetch(`http://localhost:3000/todos`, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json",
    },
  });

  let newTodo = await response.json();
  console.log("New todo: ", newTodo);
}

async function fetchTodos() {
  let response = await fetch("http://localhost:3000/todos?_sort=id&_order=desc");
  let todos = await response.json();
  return todos;
}

function displayTodos(todos) {
  todos.forEach((todo, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.classList.add("py-3");

    const checkbox = document.createElement("input");
    checkbox.classList.add("form-check-input", "me-3");
    checkbox.type = "checkbox";
    checkbox.value = "";
    checkbox.id = `todoCheckbox${index + 1}`;
    checkbox.checked = todo.completed;

    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.setAttribute("for", `todoCheckbox${index + 1}`);
    label.textContent = todo.title;

    // Apply strikethrough class if the todo is completed
    if (todo.completed) {
      label.classList.add("text-decoration-line-through");
    }

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    todoList.appendChild(listItem);
  });

  return todoList;
}

async function initializePage() {
  let todos = await fetchTodos();
  displayTodos(todos);
}

initializePage();
