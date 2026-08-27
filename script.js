const body = document.querySelector("body");
const darkModeBtn = document.querySelector("#dark-mode-btn");

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

export function getTodoListTasks() {
  const result = JSON.parse(localStorage.getItem("todo-list-tasks")) || [];
  return result;
}

export function getPlannerTableTask() {
  let plannerTableTask =
    JSON.parse(localStorage.getItem("planner-task-table")) || [];
  return plannerTableTask;
}

export function getDailyGoalsList() {
  let dailyGoalsListArray =
    JSON.parse(localStorage.getItem("daily-goals-list")) || [];
  return dailyGoalsListArray;
}
