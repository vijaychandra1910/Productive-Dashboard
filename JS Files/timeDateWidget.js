const timeWidget = document.querySelector("#time-widget");
const dateWidget = document.querySelector("#date-widget");
const dayWidget = document.querySelector("#day-widget");

const url = "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata";

async function getTimeDate() {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();

    timeWidget.innerHTML = `
    ${data.hour > 12 ? String(data.hour - 12).padStart(2, "0") : String(data.hour).padStart(2, "0")}:${String(data.minute).padStart(2, "0")} ${data.hour <= 12 ? "AM" : "PM"}`;
    console.log(data);

    dateWidget.innerHTML = `${String(data.day).padStart(2, "0")}/${String(data.month).padStart(2, "0")}/${data.year}`;
    dayWidget.innerHTML = data.dayOfWeek;
  } catch (error) {
    console.error(error);
  }
}
getTimeDate();
setInterval(() => {
  getTimeDate();
}, 1000);
