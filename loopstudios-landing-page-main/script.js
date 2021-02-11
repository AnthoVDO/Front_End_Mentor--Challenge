//open and close the menu on smartphone
const menuBtn = document.querySelector('.menu__btn');
const nav = document.querySelector('.menu__nav');

menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('menu__open')) {
        nav.style.left = 0;
        nav.style.transition = "0.2s ease-out"
        menuBtn.classList.remove('menu__open');
        menuBtn.classList.add('menu__close');
    } else {
        nav.style.left = "-120vw";
        nav.style.transition = "0.2s ease-in"
        menuBtn.classList.add('menu__open');
        menuBtn.classList.remove('menu__close');
    }


})