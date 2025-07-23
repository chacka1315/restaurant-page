import img from './assets/bkg.jpg';
function contact() {
    const content = document.querySelector('.content');

    const div = document.createElement('div');
    div.classList.add('contact');

    const form = document.createElement('div');
    form.classList.add('form')
    
    const title = document.createElement('h2');
    title.textContent = 'Contact US'
    

    const inputName  = document.createElement('input');
    inputName.type = 'text';
    inputName.id = 'name';
    const labelName = document.createElement('label');
    labelName.for = 'name';
    labelName.textContent = "Name :";
    const divName = document.createElement('div');


    const inputSurname  = document.createElement('input');
    inputSurname.type = 'text';
    inputSurname.id = 'surname';
    const labelSurname = document.createElement('label');
    labelSurname.for = 'surname';
    labelSurname.textContent = "Surname :";
    const divSurname = document.createElement('div');

    const inputEmail  = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.id = 'user_email';
    const labelEmail = document.createElement('label');
    labelEmail.for = 'user_email';
    labelEmail.textContent = "Your Email :";
    const divEmail = document.createElement('div');

    const msg  = document.createElement('textarea');
    msg.id = 'user_msg';
    const labelMsg = document.createElement('label');
    labelMsg.for = 'user_msg';
    labelMsg.textContent = "Your message :";
    const divMsg = document.createElement('div');

    const btn = document.createElement('button');
    btn.textContent = 'Submit';

    const sideImg = document.createElement('img');
    sideImg.src = img;
    sideImg.alt = "frises with some coca";
    sideImg.classList.add('contactSideImg')

    divName.appendChild(labelName);
    divName.appendChild(inputName);
    divSurname.appendChild(labelSurname);
    divSurname.appendChild(inputSurname);
    divEmail.appendChild(labelEmail);
    divEmail.appendChild(inputEmail);
    divMsg.appendChild(labelMsg);
    divMsg.appendChild(msg);

    form.appendChild(divName);
    form.appendChild(divSurname);
    form.appendChild(divEmail);
    form.appendChild(divMsg);
    form.appendChild(btn);


    div.appendChild(title);
    div.appendChild(form);
    div.appendChild(sideImg);
    content.appendChild(div);
    

}

export default contact;