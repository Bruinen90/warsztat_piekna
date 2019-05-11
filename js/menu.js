const toggleMenu = () => {
    const menuCont = document.querySelector('.menu__container');
    const menuToggler = document.querySelector('.navbar__menuToggler');
    menuCont.classList.toggle('menu__container--active');
    menuToggler.classList.toggle('navbar__menuToggler--active');
}
