import "./styles.css"
import "./uiInteractions.js"

/*This undefined variable is used to track currently active todo Container 
and its updated when the project add todo button is clicked in the createProjectCard function*/
let currentTodoContainer;

class toDoItem {
    constructor (description, priority, dueDate) {
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    };

    createTodo () {
        const toDoItem = document.createElement('div');
        const toDoDescription = document.createElement('p');
        const toDoPriority = document.createElement('div');
        const toDoDueDate = document.createElement('div');

        toDoItem.classList.add('to-do');
        toDoDescription.classList.add('metaItem', 'toDoDesc');
        toDoPriority.classList.add('meta-item', 'toDoPriority');
        toDoDueDate.classList.add('span-item', 'toDoDueDate');

        toDoDescription.textContent = this.description;
        toDoPriority.textContent = `Priority: ${this.priority}`;
        toDoDueDate.textContent = `Due Date: ${this.dueDate}`;

        currentTodoContainer.appendChild(toDoItem);
        toDoItem.appendChild(toDoDescription);
        toDoItem.appendChild(toDoPriority);
        toDoItem.appendChild(toDoDueDate);
    };

    deleteToDoItem () {

    };

    editToDoItem () {

    };
}

function createProjectCard () {

    const projectContainer = document.querySelector('.project-section');
    const projectName = document.querySelector('.project-name').value;

    const projectCard = document.createElement('div');
    const projectHeader = document.createElement('div');
    const projectTitle = document.createElement('div');
    const projectbtnAdd = document.createElement('button');
    const projectbtndel = document.createElement('button');
    const toDosContainer = document.createElement('div');
    
    projectCard.classList.add('project-card');
    projectHeader.classList.add('project-header');
    projectTitle.classList.add('project-title');
    projectbtnAdd.classList.add('project-btn', 'add');
    projectbtndel.classList.add('project-btn', 'del');
    toDosContainer.classList.add('to-dos');

    projectTitle.textContent = projectName;
    projectbtnAdd.textContent = 'Add To-do';
    projectbtndel.textContent = 'Delete Project';

    projectbtndel.addEventListener('click', () => {
        projectCard.remove();
    });

    projectbtnAdd.addEventListener('click', () => {
        currentTodoContainer = toDosContainer;
        const todoAddModal = document.querySelector('.modal-container');
        todoAddModal.classList.add('modal-container-opened');
    });

    projectContainer.appendChild(projectCard);
    projectCard.appendChild(projectHeader);
    projectCard.appendChild(toDosContainer);
    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(projectbtnAdd);
    projectHeader.appendChild(projectbtndel);
};

function addTodoTask () {
    const saveTaskBtn = document.querySelector(".btn-save");

    saveTaskBtn.addEventListener('click', () => {
        const taskDescription = document.querySelector('#todo-desc').value;
        const taskPriority = document.querySelector('#todo-priority').value;
        const taskDeadline = document.querySelector('#todo-date').value;

        const todoTask = new toDoItem(taskDescription, taskPriority, taskDeadline);
        todoTask.createTodo();
        const todoAddModalE1 = document.querySelector('.modal-container');
        todoAddModalE1.classList.remove('modal-container-opened');
    });
}

addTodoTask();
export { createProjectCard };

