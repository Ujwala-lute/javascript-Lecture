//constuctor function
//1. a new empty object is crated and assigned to this
//2. add properties to this
//3. the value  this is returned
function User(name) {
   this.name = name; 
   this.sayHi = function() {
    console.log('Hi ' + this.name);
   }
}
const user = new User('Pranit');
console.log(user.name);
user.sayHi();

let user1 = {
    name:'pranit',
    sayHi:function(){
        console.log('Hi' + this.name);
    }
};
console.log(user1);
user1.sayHi();

function MyUser() {
    this.name = 'MyName';

    return { age: 20};  //if you return an object, then this will be discarded
}

let myUser = new MyUser();
console.log('myUser',myUser);

function MyUser1(){
    this.name = 'MyName1';

    return 1;   //if you return any primitive value , then this object will be return
}
let myUser1 = new MyUser1();
console.log('myUser1',myUser1);