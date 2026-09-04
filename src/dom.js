//Project Addition
    //Global Vars
const newProjectBtn = document.querySelector('.project-button');
const addProjectModal = document.querySelector('.project-modal');
const addProjectBtn = document.querySelector('.add-project');
const deleteProjectBtn = document.querySelector('.del');

    //Stored returned object/closures

const newProject = createProjectCard();

    //Event Listeners

addProjectBtn.addEventListener('click', () => {
    newProject.add();
    addProjectModal.classList.remove('project-modal-opened');
    newProjectBtn.disabled = false;
    const modalForm = document.querySelector('.modal-form');
    modalForm.reset();
});

deleteProjectBtn.addEventListener('click', () => {
    newProject.delete();
});

newProjectBtn.addEventListener("click", () => {
    addProjectModal.classList.add('project-modal-opened');
    newProjectBtn.disabled = true;
});

    //A factory Function that creates the project card with closures to interact with
    //with the project card

function createProjectCard () {

    const projectContainer = document.querySelector('.project-section');
    const projectName = document.querySelector('.project-name').value

    const projectCard = document.createElement('div');
    const projectHeader = document.createElement('div');
    const projectTitle = document.createElement('div');
    const projectbtnAdd = document.createElement('button');
    const projectbtndel = document.createElement('button');
    const toDosContainer = document.createElement('div');
    const toDoItem = document.createElement('div');
    const toDoDescription = document.createElement('p');
    const toDoPriority = document.createElement('div');
    const toDoPriorityIndicator = document.createElement('span');
    const toDoDueDate = document.createElement('div');
    const toDoDate = document.createElement('span');
    
    projectCard.classList.add('project-card');
    projectHeader.classList.add('project-header');
    projectTitle.classList.add('project-title');
    projectbtnAdd.classList.add('project-btn', 'add');
    projectbtndel.classList.add('project-btn', 'del');
    toDosContainer.classList.add('to-dos');
    toDoItem.classList.add('to-do');
    toDoDescription.classList.add('metaItem', 'toDoDesc');
    toDoPriority.classList.add('meta-item', 'toDoPriority');
    toDoPriorityIndicator.classList.add('span-item', 'priority');
    toDoDueDate.classList.add('span-item', 'toDoDueDate');
    toDoDate.classList.add('span-item', 'dueDate');

    projectTitle.textContent = projectName;
    projectbtnAdd.textContent = 'Add To-do';
    projectbtndel.textContent = 'Delete Project';

    const appendProjectCard = () => {
        projectContainer.appendChild(projectCard);
        projectCard.appendChild(projectHeader);
        projectCard.appendChild(toDosContainer);
        projectHeader.appendChild(projectTitle);
        projectHeader.appendChild(projectbtnAdd);
        projectHeader.appendChild(projectbtndel);
        toDosContainer.appendChild(toDoItem);
        toDoItem.appendChild(toDoDescription);
        toDoItem.appendChild(toDoPriority);
        toDoItem.appendChild(toDoDueDate);
        toDoPriority.appendChild(toDoPriorityIndicator);
        toDoDueDate.appendChild(toDoDate);
    };

    const deleteProject = () => {
        projectContainer.removeChild(projectCard);
    };

    //return Functions needed for the event listeners outside
    return {
        add: appendProjectCard,
        delete: deleteProject
    }
};




