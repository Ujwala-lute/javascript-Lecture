//<body id="page1">  id -> attribute
//body.id="page1"; id->property

document.body.myData = {
    name: 'abc'
};
console.log(document.body.myData);

document.body.sayHi = () => {
    console.log('Hi');
}

console.log(document.body.id);

console.log(document.body.something);
//Standard & non-Standard attributes

console.log(document.body.hasAttribute('id'));  //true
console.log(document.body.hasAttribute('something'));  //true
console.log(document.body.getAttribute('something')); // non-standard

//DOM properties are typed

const myDiv = document.getElementById('my-div');
console.log(myDiv.style);
console.log(myDiv.style);