# Project Manager (To-Do App)

A simple to-do app where you can make projects and add tasks to them. Everything you add is saved in your browser, so your tasks are still there when you come back.

# What it does

- Create projects to group your tasks
- Add to-dos to a project (with a description, priority, and due date)
- View all your projects and the to-dos inside each one
- Delete a project (and its to-dos go with it)
- Everything is saved using the Web Storage API, so a page refresh will not wipe your data

# Tech Stack

- **HTML** – page structure
- **CSS** – styling and layout
- **JavaScript** – app logic and DOM updates
- **Webpack** – bundles the JS, CSS, and other assets into one output for the browser

# How it works

The app keeps its data separate from what you see on the screen. There is one array in JavaScript that holds all the projects, and each project holds its own list of to-dos. When you add, or delete something, three things happen in order:

1. The array in JavaScript is updated
2. The updated array is saved to `localStorage`
3. The screen is redrawn to match

This way the data and the screen never fall out of sync, and the saved data is always up to date.

# Project Structure

```
src/
  index.js          - main app logic, creates projects and to-dos
  uiInteractions.js  - handles button clicks and modals
  storage.js         - saves and loads data from localStorage
  styles.css         - all styling
```

# Data Persistence (localStorage)

Since a normal JavaScript variable disappears the moment you refresh the page, this app uses `localStorage` to keep your data around.

A few things to know about how this was done:

- `localStorage` can only store text, not objects. So before saving, the project data is turned into a text string with `JSON.stringify()`. When loading it back, `JSON.parse()` turns it back into a normal JavaScript object.
- If there is nothing saved yet (like the first time you open the app), the app does not crash. It just starts with an empty list of projects.
- To-dos are stored inside their project, not on their own. So saving a project also saves every to-do inside it.
- `JSON` cannot store functions. So when a to-do is loaded back from `localStorage`, it comes back as a plain object without its class methods attached. To handle this, the app keeps its "drawing" functions separate from the class itself, so a plain object works just as well as a real class instance when it's time to show it on the screen.

You can check your saved data yourself:
1. Open DevTools
2. Go to the **Application** tab
3. Click **Local Storage** under Storage
4. You'll see your saved projects as a JSON string, updating live as you use the app

# Running the project

```
npm install
npm run build
```

Then open the generated `index.html` in your browser.

# Notes

This project was built as part of a learning exercise on JavaScript, separating app logic from the DOM, and using the Web Storage API for persistence.
