const burgerMenu = document.querySelector('.head-menu');
let navLinks = document.getElementsByClassName('nav-links-list-item');
const nav = document.querySelector('.nav');
const listBox = document.querySelector('.nav-links-list-box');
const pages = document.querySelector('.nav-links-list-item:nth-child(3)');
const pagesArrow = document.querySelector('.nav-section-pages-arrow');

const logicHolderNote = document.querySelector('.cart-section-logic-holder-note');


if (window.innerWidth <= 650) {
    logicHolderNote.innerHTML = `<span class="cart-section-cart-nmbr">0</span>`;
}


burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
    
    navLinks = Array.from(navLinks);
    navLinks.forEach(el => {
        el.classList.toggle('active');
    });

    if ( pages.classList.contains('dropdawn') ) {
        pages.classList.remove('dropdawn');
    }
});

pages.addEventListener('click', (event) => {
    if ( event.target.closest('.nav-links-list-item-pages-link')  
       && burgerMenu.classList.contains('active') ) {
        pages.classList.toggle('dropdawn');
    }
});

document.body.addEventListener('click', function(event) {
    if (!burgerMenu.className.includes('active')) return;
    
    const bar = document.querySelectorAll('.bar');
    const links = document.querySelectorAll('.nav-link');
    const pagesBox = document.querySelector('.nav-link-pages-box');
    const path = pagesArrow.querySelector('.nav-section-pages-arrow > path');
    const prohibited = [...bar, burgerMenu, nav, ...navLinks, listBox, ...links, pagesBox, pagesArrow, path];
    if (prohibited.includes( event.target )) return;

    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
   
    navLinks = Array.from(navLinks);
    navLinks.forEach(el => {
        el.classList.toggle('active');
    });

    if ( pages.classList.contains('dropdawn') ) {
        pages.classList.remove('dropdawn');
    }
});