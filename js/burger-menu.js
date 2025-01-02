document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const overlayMenu = document.querySelector('.overlay-menu');
    const closeMenu = document.querySelector('#close-menu');

    if (burgerMenu && overlayMenu && closeMenu) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('burger-active');
            overlayMenu.classList.toggle('burger-active');
        });

        closeMenu.addEventListener('click', () => {
            burgerMenu.classList.remove('burger-active');
            overlayMenu.classList.remove('burger-active');
        });
    }
});