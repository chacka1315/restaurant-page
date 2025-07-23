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
    home();
})


menuPageBtn.addEventListener('click', () => {
    content.textContent = '';
    menu();
});

contactPagetBtn.addEventListener('click', () => {
    content.textContent = '';
    contact();
});

home();
    
