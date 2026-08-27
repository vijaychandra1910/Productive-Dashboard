// dashboard
const dashboardDiv = document.querySelector("#dashboard-div");

// logic of toggling btw dashboard and features
function toggleBtwDashboardAndFeatures(
  dashboardFeatureBtnId,
  featureDivId,
  featureBackBtnId,
) {
  let dashboardFeature = document.querySelector(dashboardFeatureBtnId);
  let featureDiv = document.querySelector(featureDivId);
  let featureBackBtn = document.querySelector(featureBackBtnId);

  dashboardFeature.addEventListener("click", () => {
    featureDiv.style.display = "grid";
    dashboardDiv.style.display = "none";
  });

  featureBackBtn.addEventListener("click", () => {
    featureDiv.style.display = "none";
    dashboardDiv.style.display = "grid";
  });
}

// todo list
toggleBtwDashboardAndFeatures(
  "#dashboard-todo-list",
  "#todo-list-div",
  "#todo-list-back-btn",
);

// daily planner
toggleBtwDashboardAndFeatures(
  "#dashboard-daily-planner",
  "#daily-planner-div",
  "#daily-planner-back-btn",
);

// motivation quote
toggleBtwDashboardAndFeatures(
  "#dashboard-motivation-quote",
  "#motivation-quote-div",
  "#motivation-back-btn",
);

// pomodoro
toggleBtwDashboardAndFeatures(
  "#dashboard-pomodoro-timer",
  "#pomodoro-div",
  "#pomodoro-back-btn",
);

// daily goals
toggleBtwDashboardAndFeatures(
  "#dashboard-daily-goals",
  "#daily-goals-div",
  "#goals-back-btn",
);
