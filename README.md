# 🚀 Productivity Dashboard

A modern, feature-rich, single-page **Productivity Dashboard** built using **Vanilla HTML5, CSS3, and Modular JavaScript (ES6)**. Designed to boost your daily workflow with an intuitive interface, customizable widgets, dark mode support, and persistent state management.

---

## ✨ Features

### 📍 Live Weather Widget
- Displays live location, real-time temperature, humidity, wind speed, and precipitation details.

### ⏰ Live Time & Date Display
- Real-time digital clock displaying current hours, minutes, seconds, date, and day of the week.

### 📝 Interactive Todo List
- Add tasks with custom titles, detailed descriptions, and category tags (**Work/Professional**, **Health/Wellness**, **Home/Household**, **Hobbies/Personal**, **Other**).
- Toggle task importance and completion status.
- Filter and delete tasks with instant updates.

### 📆 Daily Planner & Time-Slot Scheduler
- Plan your day chronologically by defining starting and ending time slots for tasks.
- Keep track of today's schedule at a glance.

### 🍅 Pomodoro Focus Timer
- Integrated Pomodoro technique tool featuring **Work Sessions** (25 mins) and **Short Breaks**.
- Full session controls: **Start**, **Stop**, and **Reset**.

### 🎯 Daily Goals Tracker
- Add, manage, and check off your daily goals.
- Live progress/status preview directly on the main dashboard cards.

### 💪 Motivational Quote Generator
- Get inspired with randomized motivational quotes and author attributions.
- Refresh anytime with a single click.

### 🌓 Dark Mode & Persistent State
- Seamless Dark Mode toggle for easy viewing during night hours.
- Powered by `localStorage` — all tasks, goals, planner items, and preferences persist even after closing or refreshing the browser.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic tags for clean layout and accessibility.
- **CSS3**: Custom properties, responsive flexbox/grid layouts, smooth animations, and dark mode theme rules.
- **JavaScript (ES6 Modules)**: Modular code architecture (`type="module"`) with decoupled feature handlers.
- **Web Storage API**: `localStorage` integration for offline data persistence.

---

## 📁 Project Structure

```
Productive-Dashboard/
├── index.html              # Main HTML entry point & dashboard layout
├── style.css               # Modern CSS styling & dark mode definitions
├── script.js               # Core app setup & shared LocalStorage helpers
└── JS Files/
    ├── dashboard.js        # View navigation & card interactions
    ├── dailyGoal.js        # Daily goals logic & status updates
    ├── dailyPlanner.js     # Time slot schedule manager
    ├── motivationQuote.js  # Motivational quotes generator
    ├── pomodoro.js         # Pomodoro timer implementation
    ├── timeDateWidget.js   # Live clock and date widget
    ├── todoList.js         # Todo list manager with category tags
    └── weatherWidget.js    # Weather widget logic
```

---

## 🚀 Quick Start / How to Run

No build tools or external servers required!

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vijaychandra1910/Productive-Dashboard.git
   ```
2. **Navigate into the directory**:
   ```bash
   cd Productive-Dashboard
   ```
3. **Open in browser**:
   - Double click `index.html` or open it with Live Server in VS Code.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](https://github.com/vijaychandra1910/Productive-Dashboard/issues).

---

## 📝 License

This project is licensed under the [MIT License](LICENSE) (or open for personal & educational use).
