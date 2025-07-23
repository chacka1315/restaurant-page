import './styles.css'
import home from './home.js';
import menu from './menu.js'
import contact from './contact.js'

const content = document.querySelector('.content')
const homePageBtn = document.querySelector('#homeBtn');
const menuPageBtn = document.querySelector('#menuBtn');
const contactPagetBtn = document.querySelector('#contactBtn');

homePageBtn.addEventListener('click', () =>{
    content.textContent = '';
    contactPagetBtn.classList.remove('buttonClicked');
    menuPageBtn.classList.remove('buttonClicked')
    home();
})


menuPageBtn.addEventListener('click', () => {
    content.textContent = '';
    homePageBtn.classList.remove('buttonClicked');
    contactPagetBtn.classList.remove('buttonClicked')
    menu();
});

contactPagetBtn.addEventListener('click', () => {
    content.textContent = '';
    homePageBtn.classList.remove('buttonClicked');
    menuPageBtn.classList.remove('buttonClicked')
    contact();
});

home();
    
