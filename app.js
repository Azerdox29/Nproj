const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    loader.classList.add('fondu-out');

});
const toggleMenuOpen = () => document.body.classList.toggle("open");

const active = document.querySelector('.active');
const active1 = document.querySelector('.active1');
const active2 = document.querySelector('.active2');
const active3 = document.querySelector('.active3');

active.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})

active1.addEventListener('click', () => {

    window.scrollTo({
        top: 600,
        left: 0,
        behavior: "smooth"
    })

})

active2.addEventListener('click', () => {

    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: "smooth"
    })

})

active3.addEventListener('click', () => {

    window.scrollTo({
        top: 3050,
        left: 0,
        behavior: "smooth"
    })

})


