const menu = document.querySelector('ul');
const ham = document.querySelector('.hamburger');

ham.addEventListener('click', () => {
    menu.classList.toggle('show');
})