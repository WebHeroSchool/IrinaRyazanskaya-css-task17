function handleChange(event) {
    if (event.target.checked) {
        menu.classList.add('menu_open');
    } else {
        menu.classList.remove('menu_open');
    }
}

const toggleButton = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');
toggleButton.addEventListener('change', handleChange);
