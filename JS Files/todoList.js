import { getTodoListTasks } from "../script.js";

const addTaskForm = document.querySelector("#add-task-form");
const todoListTasksRender = document.querySelector("#todo-list-tasks-render");
const addTaskTitle = document.querySelector("#add-task-title");
const addTaskDesc = document.querySelector("#add-task-desc");
const addTaskCategory = document.querySelector("#add-task-category");
let targetElementId;
let isImpChecked;

function todoListTasksUI() {
  let todoListTaskArray = getTodoListTasks();
  todoListTasksRender.innerHTML = "";

  todoListTaskArray.map((t) => {
    todoListTasksRender.innerHTML += `
              <tr style="text-decoration: ${t.completed ? "line-through" : "none"};">
                <span>
                <td>${t.title}</td>
                <td>${t.description}</td>
                <td>${t.category}</td>
                </span>
                <td>
                  <input
                    type="checkbox"
                    data-isimp-id="${t.id}"
                    id="add-task-isImp"
                    ${t.isImp ? "checked" : ""}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    data-completed-id="${t.id}"
                    id="add-task-completed"
                    ${t.completed ? "checked" : ""}
                  />
                </td>
                <td>
                  <button data-edit-id="${t.id}" id="add-task-edit">
                    Edit
                  </button>
                  <button data-delete-id="${t.id}" id="add-task-delete">
                    Delete
                  </button>
                </td>
              </tr>
    `;
  });
}
todoListTasksUI();

function editTask(id) {
  let todoListTaskArray = getTodoListTasks();
  let task = todoListTaskArray.find((t) => t.id === id);

  addTaskTitle.value = task.title;
  addTaskDesc.value = task.description;
  addTaskCategory.value = task.category;
}

function deleteTask(id) {
  let confirmDelete = confirm("Are you sure you want to delete?");
  if (!confirmDelete) return;
  let todoListTaskArray = getTodoListTasks();
  todoListTaskArray = todoListTaskArray.filter((t) => t.id !== id);

  localStorage.setItem("todo-list-tasks", JSON.stringify(todoListTaskArray));
  todoListTasksUI();
}

addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let todoListTaskArray = getTodoListTasks();

  if (targetElementId) {
    let idx = todoListTaskArray.findIndex((t) => t.id === targetElementId);
    todoListTaskArray[idx] = {
      id: targetElementId,
      title: addTaskTitle.value,
      description: addTaskDesc.value,
      category: addTaskCategory.value,
      isImp: false,
      completed: false,
    };
  } else {
    const obj = {
      id: crypto.randomUUID(),
      title: addTaskTitle.value,
      description: addTaskDesc.value,
      category: addTaskCategory.value,
      isImp: false,
      completed: false,
    };
    todoListTaskArray.push(obj);
  }

  localStorage.setItem("todo-list-tasks", JSON.stringify(todoListTaskArray));

  targetElementId = undefined;
  addTaskForm.reset();
  todoListTasksUI();
});

todoListTasksRender.addEventListener("click", (e) => {
  let target = e.target;
  let id = target.getAttribute("id");

  if (id === "add-task-edit") {
    targetElementId = target.dataset.editId;
    editTask(targetElementId);

  } else if (id === "add-task-delete") {
    targetElementId = target.dataset.deleteId;
    deleteTask(targetElementId);

  } else if (id === "add-task-isImp") {
    let todoListTaskArray = getTodoListTasks();
    targetElementId = target.dataset.isimpId;
    let idx = todoListTaskArray.findIndex((t) => t.id === targetElementId);
    todoListTaskArray[idx] = {
      ...todoListTaskArray[idx],
      isImp: target.checked,
    };
    localStorage.setItem("todo-list-tasks", JSON.stringify(todoListTaskArray));
    targetElementId = undefined;

  } else if (id === "add-task-completed") {
    let todoListTaskArray = getTodoListTasks();
    targetElementId = target.dataset.completedId;
    let idx = todoListTaskArray.findIndex((t) => t.id === targetElementId);
    todoListTaskArray[idx] = {
      ...todoListTaskArray[idx],
      completed: target.checked,
    };
    localStorage.setItem("todo-list-tasks", JSON.stringify(todoListTaskArray));
    targetElementId = undefined;
  }
  
  todoListTasksUI();
});
