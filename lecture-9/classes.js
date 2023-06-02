class User{
    age = 10;  //modern feature , sote bowser may not support this feature
    constructor(n) {
        this.name = n;
    }

    sayHi(){
        console.log('Hi ' + this.name);
    }
}

let user = new User('Pranit');
console.log(user.name);
console.log(user.age);
user.sayHi();

console.log(typeof User);  //function

//1. first it creates afunction with the name of class(User in this case)
//2. constrctor method becomes the body of your new function
//3. sayHi method is actually stored inside User.prototype

console.log(user);
user.sayHi();

function User1(name){
    this.name = name;
    this.sayHi = function(){
        console.log('Hi ' + this.name);
    }
}

let user1 = new User1('Pranit');
console.log('user1',user1);
