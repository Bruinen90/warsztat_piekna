const sectionsArr = document.querySelectorAll('section');
const arrowUp = document.querySelector('.scrollBar__arrow--up');
const arrowDown = document.querySelector('.scrollBar__arrow--down');

// Create bullets for each <section> element
const bulletsCont = document.querySelector('.scrollBar__bulletsCont');
const bulletsHTML = [...sectionsArr]
    .map((section, index) => `<div class="scrollBar__bullet" onClick="goToSection(${index})"></div>`);
bulletsCont.innerHTML = bulletsHTML.join('');

const allBullets = document.querySelectorAll('.scrollBar__bullet');
const goToSection = (index)=> {
    if(index >= 0 && index < sectionsArr.length)
    sectionsArr[index].scrollIntoView({behavior: 'smooth'});
}

let currSection = 0;

const checkCurrentSection = () => {
    [...sectionsArr].forEach((section, index) => {
        const cords = section.getBoundingClientRect();
        if(
            cords.bottom - window.innerHeight/2 >= 0 &&
            cords.top <= window.innerHeight/2
        ) {
            currSection = index;
            allBullets.
                forEach(bullet => bullet.classList.remove('scrollBar__bullet--active'));
            allBullets[index].classList.add('scrollBar__bullet--active')
        };
    });
}

document.addEventListener('scroll', checkCurrentSection);
window.addEventListener('load', checkCurrentSection);
arrowUp.addEventListener('click', ()=>goToSection(currSection -1));
arrowDown.addEventListener('click', ()=>goToSection(currSection +1));
