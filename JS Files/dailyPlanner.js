import { getPlannerTableTask } from "../script.js";

let plannerStartingTime = document.querySelector("#planner-starting-time");
let plannerEndingTime = document.querySelector("#planner-ending-time");
let plannerTaskDesc = document.querySelector("#planner-task-desc");
let plannerAddTask = document.querySelector("#planner-add-task");
let plannerForm = document.querySelector("#planner-form");
let plannerBodyTable = document.querySelector("#planner-table-body");
let plannerTaskId;

function plannerTableUI() {
  let plannerTableTask = getPlannerTableTask();
  plannerBodyTable.innerHTML = "";

  plannerTableTask.forEach((t) => {
    plannerBodyTable.innerHTML += `
        <tr id="planner-table-body">
          <td id="table-time-slot" data-id=${t.id}>${t.startingTime} - ${t.endingTime}</td>
          <td id="table-tasks-desc" data-id=${t.id} >${t.taskDescription}</td>
          <td id="table-tasks-actions">
            <button id="planner-task-edit" data-id=${t.id}>Edit</button>
            <button id="planner-task-delete" data-id=${t.id}>Delete</button>
          </td>
        </tr>
    `;
  });
}
plannerTableUI();

function editPlannnerTask(id) {
  let plannerTableTask = getPlannerTableTask();
  let index = plannerTableTask.findIndex((t) => t.id === id);
  if (index === -1) return;

  plannerStartingTime.value = plannerTableTask[index].startingTime;
  plannerEndingTime.value = plannerTableTask[index].endingTime;
  plannerTaskDesc.value = plannerTableTask[index].taskDescription;
}

function deletePlannerTask(id) {
  let confirmDelete = confirm("Are you sure you want to delete?");
  if (!confirmDelete) return;
  let plannerTableTask = getPlannerTableTask();
  plannerTableTask = plannerTableTask.filter((t) => t.id !== id);

  plannerTaskId = undefined;
  localStorage.setItem("planner-task-table", JSON.stringify(plannerTableTask));
  plannerTableUI();
}

plannerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let plannerTableTask = getPlannerTableTask();

  if (plannerTaskId) {
    let index = plannerTableTask.findIndex((t) => t.id === plannerTaskId);
    plannerTableTask[index] = {
      id: plannerTaskId,
      startingTime: plannerStartingTime.value,
      endingTime: plannerEndingTime.value,
      taskDescription: plannerTaskDesc.value,
    };
  } else {
    let obj = {
      id: crypto.randomUUID(),
      startingTime: plannerStartingTime.value,
      endingTime: plannerEndingTime.value,
      taskDescription: plannerTaskDesc.value,
    };

    plannerTableTask.push(obj);
  }
  plannerTaskId = undefined;
  localStorage.setItem("planner-task-table", JSON.stringify(plannerTableTask));
  plannerForm.reset();
  plannerTableUI();
});

plannerBodyTable.addEventListener("click", (e) => {
  let target = e.target;
  let idAttribute = target.getAttribute("id");

  if (idAttribute === "planner-task-edit") {
    plannerTaskId = target.dataset.id;
    editPlannnerTask(plannerTaskId);
  } else if (idAttribute === "planner-task-delete") {
    plannerTaskId = target.dataset.id;
    deletePlannerTask(plannerTaskId);
  }
});
