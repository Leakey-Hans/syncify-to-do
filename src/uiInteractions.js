import { createProjectCard  } from "./index.js";

//Sidebar list interactivity
const sideBtns = document.querySelectorAll(".list-item");

sideBtns.forEach(item => {
    item.addEventListener('click', () => {
        //remove current active item
        document.querySelector(".list-item.active")?.classList.remove('active');
        //added to clicked item
        item.classList.add('active');
    });
});

//Project Addition
    //Global Vars
const newProjectBtn = document.querySelector('.project-button');
const addProjectModal = document.querySelector('.project-modal');
const addProjectBtn = document.querySelector('.add-project');

    //Event Listeners

addProjectBtn.addEventListener('click', () => {
    createProjectCard();
    addProjectModal.classList.remove('project-modal-opened');
    newProjectBtn.disabled = false;
    const modalForm = document.querySelector('.modal-form');
    modalForm.reset();
});

newProjectBtn.addEventListener("click", () => {
    addProjectModal.classList.add('project-modal-opened');
    newProjectBtn.disabled = true;
});

    //Todo modal remove

const todoModalCancelBtn = document.querySelector('.btn-secondary');

todoModalCancelBtn.addEventListener('click', () => {
    const todoAddModalE2 = document.querySelector('.modal-container');
    todoAddModalE2.classList.remove('modal-container-opened');
    
});
