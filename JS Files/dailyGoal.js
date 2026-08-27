import { getDailyGoalsList } from "../script.js";

const dailyGoalForm = document.querySelector("#daily-goal-form");
const dailyGoalFormInput = document.querySelector("#goal-form-input");
const dailyGoalListTbody = document.querySelector("#goals-list-tbody");
const dailyGoalStatus = document.querySelector("#daily-goals-status");

let index = -1;

function statusUI() {
  let totalGoals = getDailyGoalsList().length;
  let completedGoals = getDailyGoalsList().filter(
    (t) => t.completed === true,
  ).length;

  dailyGoalStatus.innerHTML = `${completedGoals} completed out of ${totalGoals}`;
}
statusUI();

function goalsListUI() {
  let dailyGoalsListArray = getDailyGoalsList();
  dailyGoalListTbody.innerHTML = "";

  dailyGoalsListArray.map((t) => {
    dailyGoalListTbody.innerHTML += `
          <tr>
            <td id="daily-goal-desc" style="text-decoration: ${t.completed ? "line-through" : "none"}">${t.goalDesc}</td>
            <td>
              <input type="checkbox" ${t.completed ? "checked" : ""} id="daily-goal-completed" data-id=${t.id}>
            </td>
            <td>
              <button id="goal-list-edit-btn" data-id=${t.id}>Edit</button>
              <button id="goal-list-delete-btn" data-id=${t.id}>Delete</button>
            </td>
          </tr>        
        `;
  });
}
goalsListUI();

function editGoalDesc(id) {
  let dailyGoalsListArray = getDailyGoalsList();
  index = dailyGoalsListArray.findIndex((t) => t.id === id);

  dailyGoalFormInput.value = dailyGoalsListArray[index].goalDesc;
}

function deleteGoalDesc(id) {
  let dailyGoalsListArray = getDailyGoalsList();
  dailyGoalsListArray = dailyGoalsListArray.filter((t) => t.id !== id);
  localStorage.setItem("daily-goals-list", JSON.stringify(dailyGoalsListArray));
  goalsListUI();
  statusUI();
}

function goalCompleted(id, target) {
  let dailyGoalsListArray = getDailyGoalsList();
  let idx = dailyGoalsListArray.findIndex((t) => t.id === id);
  dailyGoalsListArray[idx] = {
    ...dailyGoalsListArray[idx],
    completed: target.checked,
  };

  localStorage.setItem("daily-goals-list", JSON.stringify(dailyGoalsListArray));
  goalsListUI();
  statusUI();
}

dailyGoalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let dailyGoalsListArray = getDailyGoalsList();

  if (index !== -1) {
    let goalDescId = dailyGoalsListArray[index].id;
    dailyGoalsListArray[index] = {
      id: goalDescId,
      goalDesc: dailyGoalFormInput.value,
      completed: false,
    };
  } else {
    let obj = {
      id: crypto.randomUUID(),
      goalDesc: dailyGoalFormInput.value,
      completed: false,
    };

    dailyGoalsListArray.push(obj);
  }
  index = -1;
  localStorage.setItem("daily-goals-list", JSON.stringify(dailyGoalsListArray));
  dailyGoalForm.reset();
  goalsListUI();
  statusUI();
});

dailyGoalListTbody.addEventListener("click", (e) => {
  let target = e.target;
  let elementId = target.getAttribute("id");
  let id = target.dataset.id;

  if (elementId === "goal-list-edit-btn") {
    editGoalDesc(id);
  }
  if (elementId === "goal-list-delete-btn") {
    deleteGoalDesc(id);
  }
  if (elementId === "daily-goal-completed") {
    goalCompleted(id, target);
  }
});
