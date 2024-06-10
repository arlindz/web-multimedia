window.addEventListener('load', () => {
    const pages = [];
    const buttons = [];
    const BEGIN_PAGE = 1;

    for (let i = BEGIN_PAGE; document.getElementById(`page${i}`); i++) {
        pages.push(document.getElementById(`page${i}`));
    }
    for (let i = BEGIN_PAGE; document.getElementById(`page${i}-pagination-button`); i++) {
        console.log("found button " + i);
        buttons.push(document.getElementById(`page${i}-pagination-button`));
    }

    for (let i = 0; i < pages.length; i++) {
        buttons[i].addEventListener('click', () => {
            console.log("clicked")
            for (let j = 0; j < pages.length; j++) {
                pages[j].style.display = 'none';

            }
            pages[i].style.display = 'flex';
        });
    }
})