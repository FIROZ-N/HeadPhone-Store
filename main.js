/*=====================show menu========================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
/*===================== menu show========================*/
//  validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
}
/*===================== hide menu ========================*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
}
// remove menu from mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(e => e.addEventListener('click', linkAction));

/*==============================CHANGE BACKGROUND HEADER============================*/
function scrollHeader() {
    const header = document.getElementById('header')
    return (this.scrollY >= 90) ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);

/*=====================scroll up =======================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    return (this.scrollY >= 180) ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll') ;
}
window.addEventListener('scroll',scrollUp);
/*=========================Whwn Scroll show Active link====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll',scrollActive);


//scroll reveal animation

const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    delay: 100,
    // reset: true
})

sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`)