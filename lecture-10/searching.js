//get elements or querySelectors

const menuE1 = document.getElementById('menu');
console.log(menuE1);

console.log(menuE1.id);

setTimeout({} => {
    menuE1.style.backgroundColor = 'yellow';
    },2000);

    const menuItems = document.getElementsByClassName('menu-item');
    console.log('all li.menu-item elements',menuItems);


    const liItems = document.getElementsByTagName('li');
    console.log('all li elements',liItems);

    console.log('all li.menu-item elements inside ul.menu',menuE1.getElementsByClassName['menu-item']);


    consolewarn('--------querySelector------');

    console.log(document.querySelector['menu']);
    console.log(document.querySelectorAll['#menu']);
    console.log(document.querySelector['.menu-item']);
    console.log(document.querySelectorAll['.menu-item']);
    console.log(document.querySelector['li']);
    console.log(document.querySelectorAll['li']);
    console.log(document.querySelectorAll['li.menu-item']);
