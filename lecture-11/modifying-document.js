//createElement
//createTextNode

//creating element
const liEl = document.createElement('li');
liEl.innerHTML = 'h1';
liEl.style.color = 'red';

console.log(liEl);

const messageContainer=document.getElementsByTagName('message-container');

messageContainer.append(liEl);

const liEl = document.createElement('li');
liEl.innerHTML = 'hello';
liEl.style.color = 'red';

messageContainer.prepend(liEl);

const divEl = document.createElement('div');
divEl.innerHTML= 'before';

messageContainer.before(divEl);

const divEl=document.createElement(div);
divEl.innerHTML ='after';

messageContainer.after(divEl);

setTimeout({} => {
    divEl.remove();
},7000);

const menuDiv = document.getElementById('menu');
console.log(menuDiv.className);
console.log(menuDiv.classList);

menuDiv.classList.add('menu-item');
menuDiv.classList.remove('active');

