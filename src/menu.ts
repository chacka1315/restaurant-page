import menu1 from './assets/menu1.jpg';
import menu2 from './assets/m2.jpg';
import menu3 from './assets/m3.jpg';
import menu4 from './assets/m4.jpg';
import menu5 from './assets/m5.jpg';
import menu6 from './assets/m6.jpg' ;

function menu() {
    const menuPageBtn = document.querySelector('#menuBtn');
    menuPageBtn?.classList.add('buttonClicked');
    const content = document.querySelector('.content');

    const divMenu = document.createElement('div');
    divMenu.classList.add('divMenu');

    const title = document.createElement('h2');
    title. textContent = "Our Menus";
    divMenu.appendChild(title);

    const menus = document.createElement('div');
    menus.classList.add('menus');
    menus.innerHTML = `
                        <div>
                            <img src=${menu1} alt="O'Clock Menu 1" />
                            <p>O'Clock Menu 1</p>
                        </div>
                        <div>
                            <img src=${menu2} alt="O'Clock Menu 2" />
                            <p>O'Clock Menu 2</p>
                        </div>
                        <div>
                            <img src=${menu3}  alt="O'Clock Menu 3" />
                            <p>O'Clock Menu 3</p>
                        </div>
                        <div>
                            <img src=${menu4}  alt="O'Clock Menu 4" />
                            <p>O'Clock Menu 4</p>
                        </div>
                        <div>
                            <img src=${menu5}  alt="O'Clock Menu 5" />
                            <p>O'Clock Menu 5</p>
                        </div>
                        <div>
                            <img src=${menu6}  alt="O'Clock Menu 6" />
                            <p>O'Clock Menu 6</p>
                        </div>`;

    divMenu.appendChild(title);
    divMenu.appendChild(menus);
    content?.appendChild(divMenu);

}

export default menu;