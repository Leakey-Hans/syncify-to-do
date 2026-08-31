import "./styles.css"

const sideBtns = document.querySelectorAll(".list-item");

sideBtns.forEach(item => {
    item.addEventListener('click', () => {
        //remove current active item
        document.querySelector(".list-item.active")?.classList.remove('active');
        //added to clicked item
        item.classList.add('active');
    });
});