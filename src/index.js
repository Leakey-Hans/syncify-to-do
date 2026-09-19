import "./styles.css";
import "./uiInteractions.js";
import { loadProjects, saveProjects } from "./storage.js";

// THE DATA — the single source of truth
let projects = loadProjects();

// which project is the todo modal currently adding to?
//where the todo container is now
let currentProjectId = null;

class ToDoItem {
    constructor(description, priority, dueDate) {
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}

// DRAWING

function renderTodo(todo, container) {
    const toDoItem = document.createElement("div");
    const toDoDescription = document.createElement("p");
    const toDoPriority = document.createElement("div");
    const toDoDueDate = document.createElement("div");

    toDoItem.classList.add("to-do");
    toDoDescription.classList.add("metaItem", "toDoDesc");
    toDoPriority.classList.add("meta-item", "toDoPriority");
    toDoDueDate.classList.add("span-item", "toDoDueDate");

    toDoDescription.textContent = todo.description;
    toDoPriority.textContent = `Priority: ${todo.priority}`;
    toDoDueDate.textContent = `Due Date: ${todo.dueDate}`;

    toDoItem.appendChild(toDoDescription);
    toDoItem.appendChild(toDoPriority);
    toDoItem.appendChild(toDoDueDate);
    container.appendChild(toDoItem);
}

function renderProjectCard(project) {
    const projectContainer = document.querySelector(".project-section");

    const projectCard = document.createElement("div");
    const projectHeader = document.createElement("div");
    const projectTitle = document.createElement("div");
    const projectbtnAdd = document.createElement("button");
    const projectbtndel = document.createElement("button");
    const toDosContainer = document.createElement("div");

    projectCard.classList.add("project-card");
    projectCard.dataset.id = project.id;        // tag the DOM with the data id
    projectHeader.classList.add("project-header");
    projectTitle.classList.add("project-title");
    projectbtnAdd.classList.add("project-btn", "add");
    projectbtndel.classList.add("project-btn", "del");
    toDosContainer.classList.add("to-dos");

    projectTitle.textContent = project.name;
    projectbtnAdd.textContent = "Add To-do";
    projectbtndel.textContent = "Delete Project";

    projectbtndel.addEventListener("click", () => {
        projects = projects.filter((p) => p.id !== project.id);  // remove from data
        saveProjects(projects);                                   // persist
        projectCard.remove();                                     // remove from screen
    });

    projectbtnAdd.addEventListener("click", () => {
        currentProjectId = project.id;
        document.querySelector(".modal-container")
            .classList.add("modal-container-opened");
    });

    projectContainer.appendChild(projectCard);
    projectCard.appendChild(projectHeader);
    projectCard.appendChild(toDosContainer);
    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(projectbtnAdd);
    projectHeader.appendChild(projectbtndel);

    // draw any todos this project already has (matters on page reload)
    project.todos.forEach((todo) => renderTodo(todo, toDosContainer));
}

// ACTIONS

function createProjectCard() {
    const projectName = document.querySelector(".project-name").value.trim();
    if (!projectName) return;

    const project = {
        id: crypto.randomUUID(),
        name: projectName,
        todos: [],
    };

    projects.push(project);      // 1. update data
    saveProjects(projects);      // 2. persist
    renderProjectCard(project);  // 3. draw
}

function addTodoTask() {
    const saveTaskBtn = document.querySelector(".btn-save");

    saveTaskBtn.addEventListener("click", () => {
        const project = projects.find((p) => p.id === currentProjectId);
        if (!project) return;

        const todo = new ToDoItem(
        document.querySelector("#todo-desc").value,
        document.querySelector("#todo-priority").value,
        document.querySelector("#todo-date").value
        );

        project.todos.push(todo);   // 1. update data (inside its project)
        saveProjects(projects);     // 2. persist — saves project AND todo together

        const container = document.querySelector(
        `.project-card[data-id="${currentProjectId}"] .to-dos`
        );
        renderTodo(todo, container); // 3. draw

        document.querySelector(".todo-form").reset();
        document.querySelector(".modal-container")
            .classList.remove("modal-container-opened");
    });
}

// ---------- STARTUP ----------

function restoreProjects() {
    projects.forEach((project) => renderProjectCard(project));
}

addTodoTask();
restoreProjects();

export { createProjectCard };