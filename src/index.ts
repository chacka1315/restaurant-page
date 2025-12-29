import './styles.css';
import home from './home';
import menu from './menu';
import contact from './contact';

const content = document.querySelector('.content');
const homePageBtn = document.querySelector('#homeBtn');
const menuPageBtn = document.querySelector('#menuBtn');
const contactPagetBtn = document.querySelector('#contactBtn');

homePageBtn?.addEventListener('click', () =>{
    content && (content.textContent = '');
    contactPagetBtn?.classList.remove('buttonClicked');
    menuPageBtn?.classList.remove('buttonClicked');
    home();
})


menuPageBtn?.addEventListener('click', () => {
    content && (content.textContent = '');
    homePageBtn?.classList.remove('buttonClicked');
    contactPagetBtn?.classList.remove('buttonClicked');
    menu();
});

contactPagetBtn?.addEventListener('click', () => {
    content && (content.textContent = '');
    homePageBtn?.classList.remove('buttonClicked');
    menuPageBtn?.classList.remove('buttonClicked');
    contact();
});

home();
    
